const ReserveController = require("../ReserveController");
const ReserveService = require("../ReserveService");
const Reservation = require("../Reservation");
const sinon = require("sinon");
const sinonExpress = require("sinon-express-mock");

test('should reserve seats on train', () => {
  const expectedReservation = new Reservation("trainId", 2);
  const reserveService = new ReserveService();
  const reserveController = new ReserveController();
  const reserveSpy = jest.fn(); 
  const request = sinonExpress.mockReq({"body": {"train_id": "trainId", "number_seats": 2}});
  const response = sinonExpress.mockRes();

  reserveController.reserve(request, response);

  expect(reserveSpy).toHaveBeenCalledWith(expectedReservation);
});
