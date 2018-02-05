const express = require('express');
const  bodyParser = require('body-parser');
import { ReserveController } from "./ReserveController";


const  app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.listen(3000, function () {
  const port = server.address().port;
  console.log('Example app listening at port %s', port);
});

app.post('/reserve', ReserveController.prototype.reserve);

module.exports = server;
