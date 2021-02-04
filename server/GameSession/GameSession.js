const fs = require("fs");
const { v4: uuid } = require('uuid');
const sqlite3 = require('sqlite3');

class GameSession {

  static sessions = {};

  static createSession(gm) {
    return new GameSession(gm);
  }

  static getSession(sessionId) {
    return GameSession.sessions[sessionId];
  }

  ready = false;
  gameMaster;

  constructor(gm) {
    this.setId();
    this.db = this.getDatabase();
    this.initialize().then(() => this.ready = true);
    GameSession.sessions[this.sessionId] = this;
    this.gameMaster = gm;
  }

  setId(sessionId) {
    this. sessionId = sessionId || uuid();
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
   *
   * Returns a promise that rejects if the initialization fails.
   *
   * @returns {Promise<unknown>}
   */
  async initialize() {
    if (!(await this.isInitialized())) {
      return await this.createTables();
    }
    return Promise.resolve();
  }

  async createTables() {
    const read = new Promise((resolve, reject) => {
      fs.readFile('../SQL_Scripts/initialize.sql', {encoding: 'utf8'}, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
    const sql = await read;
    return new Promise( (resolve, reject) => {
      this.db.serialize(() => {
        this.db.run(sql, (err) => {if (err === null) resolve() else reject(err)});
      });
    });
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