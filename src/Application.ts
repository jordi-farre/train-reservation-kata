import * as express from "express";
import * as bodyParser from "body-parser";
import { ReserveService } from "./ReserveService"
import { ReserveController } from "./ReserveController";

export class Application {

  server;
  app;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
  }

  start() {
    const port = 3000;
    this.server = this.app.listen(port, () => {
      console.log("Server started at port %s", port);
    });
    const reserveService = new ReserveService();
    const reserveController = new ReserveController(reserveService);
    this.app.post('/reserve', reserveController.reserve);
  }

  stop() {
    this.server.close();
  }

}
