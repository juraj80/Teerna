const rewire = require('rewire');
const chai = require('chai');
const auth = rewire('./auth.js');
const expect = chai.expect;

describe("Authentication middleware", async () => {

  async function testMiddlewareAddsUserToReq(where) {
    it (`Should add user to req if token is provided in the ${where}`, async () => { 
      const revert = auth.__set__('authenticateToken', function() {
        return Promise.resolve('foo');
      });
      const req = {body: {}, query: {}, params: {}};
      req[where] = {token: 'foo'};
      await auth.authenticateHTTP(req, {}, () => {});
      expect(req.user).to.exist;
      expect(req.user).to.equal('foo');
      revert();
    });
  }

  for (let where of ['body', 'query', 'params']) {
    testMiddlewareAddsUserToReq(where);
  }

  it (`Should return authenticated user to WS requests`, async () => { 
    const revert = auth.__set__('authenticateToken', function() {
      return Promise.resolve('foo');
    });
    const user = await auth.authenticateWS({author: {idToken: 'bar'}});
    expect(user).to.exist;
    expect(user).to.equal('foo');
    revert();
  });

  it ('Should not authenticate tokenless WS requests', async () => {
    const revert = auth.__set__('authenticateToken', function() {
      return Promise.resolve('foo');
    });
    const user = await auth.authenticateWS({author: {}});
    expect(user).to.equal(false);
    revert();
  });
});
