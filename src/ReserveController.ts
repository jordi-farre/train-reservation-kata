import { Reservation } from "./Reservation"

export class ReserveController {

  reserveService;

  constructor(reserveService) {
    this.reserveService = reserveService;
  }

  reserve(request, response) {
    const reservation = new Reservation(request.body.train_id, request.body.number_seats);
    this.reserveService.reserve(reservation, (reservationResponse) => {
      response
        .status(200)
        .send({"train_id": reservationResponse.trainId, 
              "booking_reference": reservationResponse.bookingReference,
              "seats": reservationResponse.seats});
    });
  }

}
