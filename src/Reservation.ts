export class Reservation {

  trainId: string;
  numberSeats: number;

  constructor(trainId: string, numberSeats: number) {
    this.trainId = trainId;
    this.numberSeats = numberSeats;
  }

}
