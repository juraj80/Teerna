const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const expect = chai.expect;
 
chai.use(chaiHttp);

describe("Dice API", function() {;

  describe("GET dice/:sides", function() {
    it("Should be able to throw a dice with given sides", async function (){
      const res = await chai.request(app)
        .get('/api/dice/4');
      expect(res.status).to.equal(200);
      expect(res.body.sides).to.exist;
      expect(res.body.sides).to.equal(4);
      expect(res.body.result).to.exist;
      expect(res.body.result).to.be.above(0).and.to.be.below(5);
    });
  });
});
