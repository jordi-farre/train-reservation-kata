const express = require('express');
const  bodyParser = require('body-parser');
import { ReserveService } from "./ReserveService"
import { ReserveController } from "./ReserveController";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;
app.listen(port, function () {
  console.log('Example app listening at port %s', port);
});

const reserveService = new ReserveService();
const reserveController = new ReserveController(reserveService);

app.post('/reserve', reserveController.reserve);

export default app;
