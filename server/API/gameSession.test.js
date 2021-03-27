const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const expect = chai.expect;
 
chai.use(chaiHttp);

describe("Game Session API", function() {;

  describe("POST game-session", function() {
    it("Should not accept unauthenticated requests");

    it("Should create a new game session", async function (){
      const res = await chai.request(app)
        .post('/api/game-session')
        .send({
          user: {
            name: "foo",
            token: "bar"
          }
        })
      ;
      expect(res.status).to.equal(200);
    });

  });

  describe("POST invitation.", function() {
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


