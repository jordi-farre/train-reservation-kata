export class ReservationResponse {

  trainId: string;
  bookingReference: string;
  seats: string[];

  constructor(trainId, bookingReference, seats) {
    this.trainId = trainId;
    this.bookingReference = bookingReference;
    this.seats = seats;
  }

}
