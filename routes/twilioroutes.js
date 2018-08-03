
require('dotenv').config()
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

const username = process.env.TWILIO_ACCOUNT_SID;
const password = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(username, password);
module.exports = function(app){
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: process.env.TWILIO_NUMBER,
     to: process.env.PERSONAL_NUMBER
   })
  .then(message => console.log(message.sid))
  .done();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

}
// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });