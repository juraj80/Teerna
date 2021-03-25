const chai = require('chai');
const GameSession = require('./GameSession.js');

const expect = chai.expect;

let game;

describe("Game Session Class", function() {;
  beforeEach(
    async function () {
      game = await GameSession.createSession({user_id: 'gm', email: 'gamemaster@example.com'});
    }
  );

  afterEach(
    function () {
      game.deleteGame();
    }
  );

  describe("Create Game Sessions", function() {
    it("Should require user_id and email to create a session.", async function() {
      expect(()=>GameSession.createSession({})).to.throw;
      expect(()=>GameSession.createSession({user_id: 'gm', email: 'gamemaster@example.com'})).not.to.throw;
    });

    it("Should create a new game id for a newly created game", async function() {
      expect(game.guid).to.exist;
      expect(game.guid.length).to.equal(36);
      expect(game.guid.split('-').length).to.equal(5);
      const game2 = await GameSession.createSession({user_id: 'gm', email: 'gamemaster@example.com'});
      expect(game2.guid).to.exist;
      expect(game2.guid.length).to.equal(36);
      expect(game2.guid.split('-').length).to.equal(5);
      expect(game.guid).not.to.equal(game2.guid);
      game2.deleteGame();
    });

    it("Should create a new database file name for a newly created game", async function() {
      expect(game.dbFile).to.exist;
      expect(game.dbFile.endsWith('sqlite')).to.be.true;
    });

    it("Should create a new folder for the created game", async function() {
      const folder = game.getFolder();
      expect(folder.includes('teerna')).to.be.true;
    });
  });

  describe("Retrieve Game Sessions", function() {

    it("Should retrieve Game Sessions.", async () => {
      const game2 = await GameSession.getSession({user_id: 'gm', email: 'gamemaster@example.com'}, game.guid);
      expect(game.guid).to.equal(game2.guid);
      expect(game.getFolder()).to.equal(game2.getFolder());
      game2.deleteGame();
    });
  } );

  describe("Game Invitations", function (){

    it("Should be able to create invitations.", function () {
      
    });
    it("Should be able to retrieve invitations.");
    it("Invited users should be able to retrieve the game.");
    it("Uninvited users should not be able to retrieve the game.");
  });


});


