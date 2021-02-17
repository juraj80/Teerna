const path = require('path');

class Player {

  constructor(name, gameSession) {
    this.name = name;
    this.gameSession = gameSession;
  }

  async insert(name, isGM) {
    return this.gameSession.sql(
      path.join('player', 'createPlayer.sql'),
      {
        '$name': name,
        '$isGM': isGM
      }
    );
  }

  /**
   * Gag this player.
   *
   * @returns {Promise<*>}
   */
  async gag() {
    return this.gameSession.gag(this.name);
  }


  /**
   * Ungag this player.
   * @returns {Promise<void>}
   */
  async ungag() {
    return this.gameSession.ungag(this.name);
  }

  async isGagged(name) {
    await this.gameSession.sql(path.join('gagged', 'gagged.sql'));
    return this.gameSession.sql(
      path.join('gagged', 'gaggedCreate.sql'),
      {'$player': name}
    );
  }



}