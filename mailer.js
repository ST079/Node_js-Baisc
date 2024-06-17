// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("I am a server");
// });

// const start = async () => {};

// start();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "901086685a7548",
    pass: "53dab33213599a",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

async function main() {
  const info = await transporter.sendMail({
    from: "info@mailtrap.club",
    to: "<suzanyba079@gmail.com>", // list of receivers
    subject: "Is is working", // Subject line
    text: "Hello world?", // plain text body
    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
    attachments: [
      {
        filename: "1.jpg",
        path: "./1.jpg",
        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

//principallebs@gmail.com        lotus english boarding school thapagaun,sunakhoti,lalitpur
