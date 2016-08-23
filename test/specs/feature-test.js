var assert = require('assert');
var webdriverio = require('webdriverio');
var app = require('../../server');

var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

let server;
const port = process.env.PORT || 3001;

// Spin up the server before running the tests.
before((done) => {
  server = app.listen(port, (err, result) => {
    if (err) { return done(err); }
    done();
  });
});

after((done) => {
  server.close(done);
});

describe('Main Page', () => {

  it('should have the title stored in app.locals.title', (done) => {
    client
      .init()
      .url(`http://localhost:${port}/`)
      .getTitle().then((title) => {
          assert.equal(title, app.locals.title);
          done();
      })
      .end();
  }).timeout(10000);

});
