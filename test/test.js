var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with Servus und Guten Morgen', function(done) {
    request(app).get('/').expect('Servus und Guten Morgen', done);
  });
});
