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
    from: '"Website Contact" <hello@vicente.io>', // sender address
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
