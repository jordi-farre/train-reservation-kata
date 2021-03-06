import { ReserveController } from "../ReserveController";
import { ReserveService } from "../ReserveService"
import { Reservation } from "../Reservation";
import { ReservationResponse } from "../ReservationResponse"
jest.mock("../ReserveService");
const mockRes = require('jest-mock-express').response;
const expectedReservation = {"trainId":"express_2000", "numberSeats": 2};
const reserveService = new ReserveService();
const reserveSpy = reserveService.reserve; 
const reserveController = new ReserveController(reserveService);
const response = mockRes();

test('should reserve seats on train', () => {
  const request = {"body": {"train_id": "express_2000", "number_seats": 2}};
  reserveController.reserve(request, response);
  reserveSpy.mock.calls[0][1]({"trainId": "express_2000", "bookingReference":"75bcd15", "seats":["1A", "1B"]})

  expect(reserveSpy).toHaveBeenCalledWith(expectedReservation, expect.any(Function));
  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.send).toHaveBeenCalledWith({"train_id": "express_2000", "booking_reference": "75bcd15", "seats": ["1A", "1B"]});
});
