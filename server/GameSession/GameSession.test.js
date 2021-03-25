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
      expect(()=>GameSession.createSession({user_id: 'foo', email: 'bar'})).not.to.throw;
    });

    it("Should create a new game id for a newly created game", async function() {
      const game = await GameSession.createSession({user_id: 'foo', email: 'bar'});
      expect(game.guid).to.exist;
      expect(game.guid.length).to.equal(36);
      expect(game.guid.split('-').length).to.equal(5);
      const game2 = await GameSession.createSession({user_id: 'foo', email: 'bar'});
      expect(game2.guid).to.exist;
      expect(game2.guid.length).to.equal(36);
      expect(game2.guid.split('-').length).to.equal(5);
      expect(game.guid).not.to.equal(game2.guid);
    });

    it("Should create a new database file name for a newly created game", async function() {
      const game = await GameSession.createSession({user_id: 'foo', email: 'bar'});
      expect(game.dbFile).to.exist;
      expect(game.dbFile.endsWith('sqlite')).to.be.true;
    });

  });

  describe("Retrieve Game Sessions", function() {
    it("Should not accept unauthenticated requests.");

    it("Should create a new invitation.");

    it("Should return a list with the pending invitations.");
    
  });

  describe("GET guid", function (){
    it("Should not accept unauthenticated requests");

    it("Should not accept uninvited users");

    it("Should remove accepted players from the invitation list");

    it("Should acknowledge that the player was accepted.");
  });

});


