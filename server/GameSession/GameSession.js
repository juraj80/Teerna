const fs = require("fs");
const path = require('path');
const { v4: uuid } = require('uuid');
const sqlite3 = require('sqlite3');
const os = require('os');

/**
 * Game Session class.
 *
 * This class represents the state of a Game Session.
 * Each game has its own Database. One should be careful to always execute actions against the proper GameSession instance.
 *
 *
 */
class GameSession {

  static sessions = {};

  static getSession(sessionId) {
    return GameSession.sessions[sessionId];
  }

  /**
   * @type {sqlite3.Database}
   */
  db;

  /**
   * @type {string}
   */
  dbFile;

  ready = false;

  userStatus = {
    blocked: [],
    gagged: []
  }

  constructor(credentials) {
    this.authenticate(credentials);
    this.setId();
    GameSession.sessions[this.sessionId] = this;
  }

  /**
   * Validates user credentials and set the current user of the Game Session.
   *
   * @param credentials
   */
  authenticate(credentials) {
    // TODO: validate the credentials received from the frontend.
    this.user = credentials;
    this.sessionId = credentials.guid;
  }

  /**
   * Sets the session ID.
   *
   * This id uniquely identify the game, allowing the server to host multiple games at the same time.
   * It is also used to name and retrieve the database file.
   *
   * @param sessionId
   */
  setId(sessionId) {
    this.sessionId = sessionId || uuid();
  }

  /**
   * Replaces the current Game Master.
   *
   * @param userId
   * @returns {Promise<unknown>}
   */
  setGM(userId) {
    return this.sql(path.join('player', 'setGM.sql'), {'$player': userId});
  }

  /**
   * Returns a Sqlite3 Database stored in the databases/SESSIONID.sqlite file.
   *
   * @returns {sqlite3.Database}
   */
  async setDatabase() {
    if (!this.dbFile) {
      this.dbFile = await this.getDbFile();
      console.log("Creating a new game database ", this.dbFile);
    } else {
      console.log("Accessing game database ", this.dbFile);
    }
    this.db = new sqlite3.Database(this.dbFile);
    return this.db;
  }

  /**
   * Creates a new filename for the database, clearing the path for that file.
   *
   * If the application is running in test mode, always use the filename "test-teerna.sqlite"
   * @returns {Promise<string>}
   */
  getDbFile() {
    const dbFileName = process.argv[2] === 'test' ? 'test-teerna.sqlite': `${this.sessionId}.sqlite`;
    return new Promise( (resolve, reject) => {
      const dbPath = path.join(os.tmpdir(), dbFileName);
      fs.unlink(dbPath, (err) => {
          if (err) {
            if (err.code === 'ENOENT') {
              resolve(dbPath);
            } else {
              reject(err);
            }
          }
          else resolve(dbPath);
      });
    });
  }

  /**
   * Initializes the database if it is not initialized already.
   * Sets the given player as the GM.
   *
   * Returns a promise that rejects if the initialization fails.
   *
   * @returns {Promise<boolean>}
   */
  async initialize() {
    if (!(await this.isInitialized())) {
      try {
        const created = await this.createTables();
        return true;
      } catch(e) {
        console.error(e);
        return false;
      }
    }
    return true;
  }

  async createTables() {
    // Sqlite3 won't create many tables in a single command.
    // So, we first read the file contents:
    const contents = await this.fileContents(this.dbFilePath('initialize.sql'));
    // Split it into several commands
    const commands = contents.split(';').filter(c => !c.match(/^\s*$/));
    return new Promise( (resolve, reject) => {
      // And execute all commands
      try {
        const r = this.db.serialize(() => {
            for (const [k, c] of commands.entries()) {
              if (k !== commands.length - 1 ) {
                this.db.run(c);
              } else {
                this.db.run(c, resolve);
              }
            }
          }
        );
      } catch(e) {
        reject(e);
      }
    });
  }

  /**
   * Checks if the database is already initalized.
   *
   * @returns {Promise<boolean>}
   */
  async isInitialized() {
    return new Promise( async (resolve, reject) => {
      try {
        const row = await this.sqlString("SELECT name FROM sqlite_master WHERE type='table' AND name='battleMap'", {}, "all");
        resolve(row.length > 0);
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Returns a Promise to the contents of the given file.
   *
   * @param {string} file: the path to the SQL file
   * @returns {Promise<string>} the contents of the file
   */
  async fileContents(file) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, {encoding: 'utf8'}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }

  /**
   * Returns a promite to the Player that is the GameMaster of this GameSession.
   *
   * @returns {Promise<unknown>} 
   */
  async gameMaster() {
    return this.sql(path.join('player', 'getGameMaster.sql'), 'get');
  }

  /**
   * Creates a new player in the database.
   *
   * @param {string} playerName to be created
   * @returns {Promise<unknown>} 
   */
  async playerCreate(playerName) {
    const result = await this.sql(path.join('player', 'createPlayer.sql'),  {'$name': playerName}, "all")
    return result;
  }

  /**
   * Returns a paged list of users in the database.
   *
   * @param {number} offset
   * @param {number} limit
   * @returns {Promise<unknown>}
   */
  playerList(offset = 0, limit = 50) {
    return this.sql(path.join('player', 'getPlayers.sql'), {
      '$offset': offset,
      '$limit': limit
    });
  }

  /**
   * Gag a player by name
   *
   * @param name
   * @returns {Promise<any>}
   */
  async gag(name) {
    await this.sql(path.join('gagged', 'gagged.sql'));
    return this.sql(
      path.join('gagged', 'gaggedCreate.sql'),
      {'$player': name}
    );
  }

  /**
   * Ungag a player by name
   *
   * @param name
   * @returns {Promise<any>}
   */
  async ungag(name) {
    await this.sql(path.join('gagged', 'gagged.sql'));
    return this.sql(
      path.join('gagged', 'gaggedFinish.sql'),
      {'$player': name}
    );
  }

  /**
   * Executes a SQL file and returns a Promise that resolve to the resulting rows.
   *
   * @param {string} file: the file path to be executed.
   * @param {Object} parameters: key value pairs with the parameters to be replaced in the SQL.
   * @returns {Promise<unknown>}
   */
  async sqlAll(file, parameters) {
    return this.sql(file, parameters, 'all')
  }

  dbFilePath(filename) {
    return path.join(__dirname, '..', 'SQL_Scripts', filename);
  }

  async sql(file, parameters, op = 'run' ) {
    if (!['run', 'all', 'get'].includes(op)) {
      throw new TypeError("Invalid operation.");
    }
    const sql = await this.fileContents(this.dbFilePath(file));
    return this.sqlString(sql, parameters, op);
  }

  sqlString(sql, parameters, op = "run") {
    return new Promise( (resolve, reject) => {
      this.db[op](sql, parameters, (err, rows) => {
        if (err === null) resolve(rows);
        else reject(err);
      });
    });
  }



  /**
   * Closes the database and returns a promise that resolves when the database is closed.
   * Rejects the promise if an error occurs.
   *
   * @returns {Promise<unknown>}
   */
  close() {
    return new Promise( (resolve, reject) => {
      this.db.close((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

}

/**
 * Creates a new Game and sets the current user as the GM.
 *
 * The current user is created from the provided credentials.
 *
 * @returns {Promise<GameSession>} a Promise that resolves to the GameSession instance.
 */
GameSession.createSession = async function(credentials) {
  // TODO: validate credentials.
  const gameSession = new GameSession(credentials);
  await gameSession.setDatabase();
  await gameSession.initialize();
  gameSession.ready = true;
  await gameSession.playerCreate(credentials.name);
  await gameSession.setGM(1);
  return gameSession;
}

module.exports = GameSession;
