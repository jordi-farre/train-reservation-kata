module.exports = class ReserveController {

  reserve(request, response) {
    console.log("hola...");
    response.status(200).send({test: 'aaaa'});
  }

}
