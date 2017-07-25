var dispatcher = require("httpdispatcher");
var fcmConnector = require("./fcmConnector.js").fcmConnector;

dispatcher.onPost("/sendMessage", function (request, response) {
  var messageToSend = request.body;
  console.log("Message to send------------ =", messageToSend);
  fcmConnector.sendMessage(messageToSend);
  response.writeHead(200,{'Content-type':'text/plain'});
  response.end("true");
});

module.exports.dispatcher = dispatcher;
