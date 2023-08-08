import { SchemaTypeOptions } from "mongoose";
import nodemailer from "nodemailer"
import { htmlCode } from "./template.js";

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'abdomahmoud1099@gmail.com',
      pass: 'ldvhbkhamufnstte'
    }
  });

 export  async function sendEmail(options){
    // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Abdelrahman Mahmoud" <abdomahmoud1099@gmail.com>', // sender address
    to: options.email, // list of receivers
    subject: "Verify your Account", // Subject line
    text: "Verify", // plain text body
    html: htmlCode(options.email), // html body
  });

  console.log("Message sent: %s", info.messageId);
  }
  
  
  