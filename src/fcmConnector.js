var FCM = require('fcm-push');

var serverKey = 'AAAAtwYqDZ0:APA91bEU6WlhiIgUje6AYNF2hdUTbynakq51Tx2RQix29C0bjsq9HoNm9RHQXgEHmtV2_TykhqXtNAw0uVnM3ccsPQzaPVnKmu0gQjjB9whiLWY45Vv6fyedLIJrnWv0bvX3ddAn68ho';
var fcm = new FCM(serverKey);

var fcmConnector = {};

var createMessage = function (messageToSend) {
  return {
    to: messageToSend.token ? messageToSend.token : "/topics/news", // required fill with device token or topics
    data: {
      your_custom_data_key: 'your_custom_data_value'
    },
    notification: {
      title: messageToSend.title,
      body: messageToSend.body
    }
  };
}

fcmConnector.sendMessage = function (messageToSend) {
  var msg = createMessage(JSON.parse(messageToSend));
  console.log("--------------:\n",msg);
  fcm.send(msg, function(err, response){
    if (err) {
      console.log("Something has gone wrong!");
    } else {
      console.log("Successfully sent with response: ", response);
    }
  });
}

module.exports.fcmConnector = fcmConnector;

