module.exports = class ReservationResponse {

  constructor(trainId, bookingReference, seats) {
    this.trainId = trainId;
    this.bookingReference = bookingReference;
    this.seats = seats;
  }

}
