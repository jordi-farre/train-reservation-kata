const ReserveController = require("../ReserveController");
const ReserveService = require("../ReserveService");
jest.mock("../ReserveService");
const Reservation = require("../Reservation");
const ReservationResponse = require("../ReservationResponse")
const mockRes = require('jest-mock-express').response;
const expectedReservation = new Reservation("express_2000", 2);
const reserveService = new ReserveService();
const reserveSpy = reserveService.reserve; 
const reserveController = new ReserveController(reserveService);
const request = {"body": {"train_id": "express_2000", "number_seats": 2}};
const response = mockRes();

test('should reserve seats on train', () => {
  reserveController.reserve(request, response);
  reserveSpy.mock.calls[0][1](new ReservationResponse("express_2000", "75bcd15", ["1A", "1B"]))

  expect(reserveSpy).toHaveBeenCalledWith(expectedReservation, expect.any(Function));
  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.send).toHaveBeenCalledWith({"train_id": "express_2000", "booking_reference": "75bcd15", "seats": ["1A", "1B"]});
});
