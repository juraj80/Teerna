const fs = require("fs");
const path = require('path');
const { v4: uuid } = require('uuid');
const sqlite3 = require('sqlite3');

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

  /**
   * Creates a new Game and sets the current user as the GM.
   *
   * The current user is created from the provided credentials.
   */
  static async createSession(credentials) {
    const gameSession = new GameSession(credentials);
    await gameSession.playerCreate(credentials.name);
    return gameSession.setGM(1);
  }

  static getSession(sessionId) {
    return GameSession.sessions[sessionId];
  }

  ready = false;

  userStatus = {
    blocked: [],
    gagged: []
  }

  constructor(credentials) {
    this.authenticate(credentials);
    this.setId();
    this.db = this.getDatabase();
    this.initialize().then(() => this.ready = true);
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
    this. sessionId = sessionId || uuid();
  }

  /**
   * Replaces the current Game Master.
   *
   * @param userId
   * @returns {Promise<unknown>}
   */
  setGM(userId) {
    return this.sql(path.join('player', 'setGM'), {'$player': userId});
  }

  /**
   * Returns a Sqlite3 Database stored in the databases/SESSIONID.sqlite file.
   *
   * @returns {sqlite3.Database}
   */
  getDatabase() {
    return sqlite3.Database(`./databases/${this.sessionId}.sqlite`);
  }

  /**
   * Initializes the database if it is not initialized already.
   * Sets the given player as the GM.
   *
   * Returns a promise that rejects if the initialization fails.
   *
   * @returns {Promise<unknown>}
   */
  async initialize(credentials) {
    if (!(await this.isInitialized())) {
      return await this.createTables(credentials);
    }
    return Promise.resolve();
  }

  async createTables(credentials) {
    return this.sql('initialize.sql', {player: credentials});
  }

  /**
   * Checks if the database is already initalized.
   *
   * @returns {Promise<boolean>}
   */
  isInitialized() {
    return new Promise( (resolve, reject) => {
      try {
        this.db.serialize(() => {
          this.db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='battleMap'", (err, row) => {
            if (err || row === undefined) {
              resolve(false);
            } else {
              resolve(true);
            }
          });
        });
      } catch (e) {
        reject (e);
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
      fs.readFile(path.join('..', 'SQL_Scripts', file), {encoding: 'utf8'}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  }

  async gameMaster() {
    return this.sql(path.join('player', 'getGameMaster.sql'));
  }

  /**
   *
   * @param playerName
   * @returns {Promise<unknown>}
   */
  playerCreate(playerName) {
    return this.sql(path.join('player', 'createPlayer.sql'),  {'$name': playerName})
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

  async sql(file, parameters, op = 'run' ) {
    if (!['run', 'all', 'get'].includes(op)) {
      throw new TypeError("Invalid operation.");
    }
    const sql = await this.fileContents(path.join('..', 'SQL_Scripts', file));
    return new Promise( (resolve, reject) => {
      this.db.serialize(() => {
        this.db[op](sql, parameters, (err, rows) => {if (err === null) resolve(rows); else reject(err)});
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

module.exports = GameSession;