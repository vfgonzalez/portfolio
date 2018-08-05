const router = require("express").Router();
const nodemailer = require( 'nodemailer')
require('dotenv').config();

// Matches with "/api/resource"
router.route("/")
  .post(function(req,res){
      nodemailer.createTestAccount((err,account) =>{
          const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
            </ul>
            <p>Message: ${req.body.message}<p>
          `

          let transporter = nodemailer.createTransport({
            host: 'smtp.yahoo.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.YAHOO_EMAIL, // generated ethereal user
                pass: process.env.YAHOO_PASS // generated ethereal password
            }
        });

    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Website Contact" <'+process.env.YAHOO_EMAIL+'>', // sender address
            to: process.env.GOOGLE_EMAIL, // list of receivers
            subject: 'New Portfolio Contact', // Subject line
            text: 'Hello world?', // plain text body
            html: htmlEmail // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
      })
  });