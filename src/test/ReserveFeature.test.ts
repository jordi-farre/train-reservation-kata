const fs = require("fs");
var request = require('supertest');
var nock = require('nock');

describe('train reservation', function () {
  var server;
  beforeEach(() => {
    server = require('../App.js');
  });
  afterEach(() => {
    server.close();
  });
  it('with available seats', (done) => {
    var booking = nock("http://bookingservice")
      .get("/booking_reference")
      .reply(200, "booking_ref");
    var trainData = nock("http://traindata")
      .get("/data_for_train/123")
      .reply(200, fs.readFileSync("./all_coach_free.json", "utf8"))
    var reserve = nock("http://trainservice")
      .post("/reserve", (body) => {
        return body.train_id === '123' && body.seats === '["1A", "2A"]' && body.booking_reference === 'booking_ref';
      })
      .reply(200, fs.readFileSync("./all_coach_free_result.json", "utf8")); 

    request(server)
      .post('/reserve')
      .send({train_id: '123', number_seats: 2})
      .expect({train_id: '123', booking_reference: 'booking_ref', seats: ['1A', '2A']}, done);
  });
});