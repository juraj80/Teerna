const chai = require('chai');
const GameSession = require('./GameSession.js');

const expect = chai.expect;

let game;

describe("Game Session Class", function() {;
  beforeEach(
    async function () {
      game = await GameSession.createSession({user_id: 'gm', name: 'Game Master', email: 'gamemaster@example.com'});
    }
  );

  afterEach(
    function () {
      //game.deleteGame();
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
    it("Should retrieve the game Master.", async () => {
      const gm = await game.gameMaster();
      expect(gm.playerName).to.equal('Game Master');
      const game2 = await GameSession.getSession({user_id: 'gm', email: 'gamemaster@example.com'}, game.guid);
    });

    it("Should retrieve Game Sessions.", async () => {
      const game2 = await GameSession.getSession({user_id: 'gm', email: 'gamemaster@example.com'}, game.guid);
      expect(game.guid).to.equal(game2.guid);
      expect(game.getFolder()).to.equal(game2.getFolder());
      game2.deleteGame();
    });
  } );

  describe("Game Invitations", function (){

    it("Should be able to list the players.", async function (){
      const invitationList = [
        ['foo@example.com', 'foo'],
        ['bar@example.com', 'bar'],
        ['baz@example.com', 'baz']
      ];
      for (let i of invitationList) {
        await game.playerInvite(i[0]);
        await game.updatePlayerName(i[0], i[1]);
      }
      const players = await game.playerList('ba');
      console.log('UID', game.guid);
      expect(players.length).to.equal(2);

    });

    it("Should be able to create invitations.", async function () {
      let pending = await game.getPendingInvitations();
      expect(pending.length).to.equal(0);
      const invitedEmail = 'foo@example.com';
      await game.playerInvite(invitedEmail);
      pending = await game.getPendingInvitations();
      expect(pending.find(e => e.email === invitedEmail).email).to.equal(invitedEmail);
    });

    it("Should be able to retrieve invitations.", async function (){
      const invitationList = [
        'foo@example.com',
        'bar@example.com',
        'baz@example.com'
      ];
      for (let i of invitationList) {
        await game.playerInvite(i);
      }
      const pending = await game.getPendingInvitations();
      expect(pending.length).to.equal(invitationList.length);
    });

    describe("Only invited users should be able to retrieve the game.", async function() {
      const invited = 'foo@example.com';
      const uninvited = 'baf@example.com';

      it("Invited users should be able to retrieve the game.", async function () {
        await game.playerInvite(invited);
        const game2 = await GameSession.getSession({name: 'invited', user_id: 'invited', email: invited}, game.guid);
        expect(game2.guid).to.equal(game.guid);
      });

      it("Uninvited users should not be able to retrieve the game.", async function (){
        await game.playerInvite(invited);
        let game2;
        try {
          game2 = await GameSession.getSession({name: 'uninvited', user_id: 'uninvited', email: uninvited}, game.guid);
          expect(true).to.equal(false);
        } catch (e) {
          expect(e.message).to.equal('The provided user is not a member of this game');
        }
      });
    });

  });

  describe("Gagging players",  async function (){
    it("Game Master should be able to gag and ungag players", async function (){
      await game.playerInvite('foo@example.com');
      await game.gag(2);
      let gagged;
      gagged = await game.isGagged(2);
      expect(gagged.playerId).to.equal(2);
      await game.ungag(2);
      gagged = await game.isGagged(2);
      expect(gagged).not.to.exist;
    });
  });

});
