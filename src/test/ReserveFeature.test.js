var request = require('supertest');

describe('train reservation', function () {
  var server;
  beforeEach(() => {
    server = require('../ReserveController');
  });
  afterEach(() => {
    server.close();
  });
  it('with available seats', (done) => {
  request(server)
    .post('/reserve')
    .send({train_id: '123', number_seats: 5})
    .expect({train_id: '123', booking_reference: 'booking_ref', seats: ['1A', '1B']}, done);
  });
});
