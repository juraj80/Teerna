const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const firebase = require('firebase-admin');
const expect = chai.expect;
const axios = require('axios');

// Firebase configuration.
const config = {
  apiKey: process.env['REACT_APP_API_KEY'],
  authDomain: process.env['REACT_APP_AUTH_DOMAIN'],
  projectId: process.env['REACT_APP_PROJECT_ID'],
  storageBucket: process.env['REACT_APP_STORAGEBUCKET'],
  messagingSenderId: process.env['REACT_APP_MESSAGING_SENDER_ID'],
  appId: process.env['REACT_APP_APP_ID'],
  measurementId: process.env['REACT_APP_MESSAGING_SENDER_ID']
};

console.log('Config', config);
console.log('EMULATOR', process.env['FIREBASE_AUTH_EMULATOR_HOST']);


// Initializ Firebase
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(config): firebase.app();

async function mockUser() {
  //FirebaseAuthError.FirebaseError
  let user;
  try {
    user = await firebaseApp.auth().createUser({id: 'nelson', uid: 'Nelson', email: 'nelson@example.com'})
  } catch (e) {
    user = null;
  }
  return user;
}

async function createMockUser() {
  const tokenRes = await axios.post(
    `http://localhost:9099/www.googleapis.com/identitytoolkit/v3/accounts:signUp?key=${process.env['REACT_APP_API_KEY']}`,
    {email: 'foo@example.com', password: 'foobar', returnSecureToken: true}
  );
  return tokenRes;
}

async function convertCustomTokenToIdToken(customToken) {
  const tokenRes = await axios.post(
    `http://localhost:9099/www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${process.env['REACT_APP_API_KEY']}`,
    {token: customToken, returnSecureToken: true}
  );
  const res = await chai.request(app)
    .post('/api/game-session')
    .send({
      token: tokenRes.data.idToken
    }) ;
  return tokenRes.data.idToken;
}

chai.use(chaiHttp);

describe("Game Session API", function() {;
  let user;
  let customToken;
  let idToken;

  before(async function() {
    console.log("Mock User", await createMockUser());
    const u = await mockUser();
    user = await firebaseApp.auth().getUserByEmail('nelson@example.com');
    console.debug(firebaseApp.auth());
    customToken = await firebaseApp.auth().createCustomToken(user.uid);
    idToken = await convertCustomTokenToIdToken(customToken);
  });

  after(async function() {
    await firebaseApp.auth().deleteUser(user.uid);
  });

  describe("POST game-session", function() {
    it("Should not accept unauthenticated requests", async function() {
      const res = await chai.request(app)
        .post('/api/game-session')
        .send({});
      expect(res.status).to.equal(403);
    });

    it("Should create a new game session", async function (){
      //const user = await firebaseApp.auth().getUser('Anna');
      //console.log('here is Anna', user);
      const res = await chai.request(app)
        .post('/api/game-session')
        .send({
          token: idToken
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


