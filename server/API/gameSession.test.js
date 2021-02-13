const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const expect = chai.expect;
 
chai.use(chaiHttp);

describe("Game Session API", function() {;

  describe("POST game-session", function() {
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
});
