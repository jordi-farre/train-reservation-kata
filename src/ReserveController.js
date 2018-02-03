const express = require('express');
const  bodyParser = require('body-parser');


const  app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.listen(3000, function () {
  const port = server.address().port;
  console.log('Example app listening at port %s', port);
});

app.post('/reserve', (request, response) => {
  console.log(request.body);
  response.status(200).send({test: 'aaaa'});
});

module.exports = server;
