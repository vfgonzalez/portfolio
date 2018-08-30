const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const nodemailer = require('nodemailer')
const request = require("request")
// const router = express.Router();
require('dotenv').config();

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personalwebsitedb");

app.post("/send", (req,res)=>{
  // if(
  //   req.body.captcha=== undefined ||
  //   req.body.captcha === '' ||
  //   req.body.captcha === null
  // ){
  //   return ( alert("Please verify you are not a robot."))
  // }else{
          // const secretKey = process.env.SECRETKEY

          // const verifyURL = `https://google.com/recaptcha/api/siteverify=
          //   ${secretKey}&&${req.body.captcha}&&remoteip=${req.connection.remoteAddress}`

          // request(verifyURL, (err, res, body )=> {
          //     body = JSON.parse(body);
          //     // Fail test: 
          //     if(body.success !== undefined && !body.success){
          //       return (alert("Sorry, I can't confirm you aren't a bot. Try Again."))
          //     }
          // })  
          // console.log(req.body);
          const htmlEmail = `
          <h3>Contact Details</h3>
          <h4>Name: ${req.body.name}</h4>
          <h4>Number: ${req.body.number}</h4>
          <h4>Email: ${req.body.email}</h4>
          <h3>Message:</h3>
          <h3>${req.body.message}</h3>
          `
          
          let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: process.env.GOOGLE_EMAIL, // generated ethereal user
              pass: process.env.GOOGLE_PW // generated ethereal password
            }
          });
          
          // setup email data with unicode symbols
          let mailOptions = {
            from: '"Website Contact"', // sender address
            to: 'Vicente Gonzalez,'+process.env.GOOGLE_SEND+'', // list of receivers
            subject: 'New Website Contact', // Subject line
            text: req.body.message, // plain text body
            html:htmlEmail // html body
          };
          
          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            // console.log('Message sent: %s', info.messageId);
            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          });  
      // }
  })
  
  

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
})
