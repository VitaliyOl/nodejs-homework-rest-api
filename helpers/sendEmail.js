const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL, PASS } = process.env;

const config = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASS,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL };
  transporter.sendMail(email);
  return true;
};

// console.log(
//   sendEmail({
//     to: "sikaka6853@mliok.com",
//     subject: "Hello its me",
//     text: "Привіт. Ми тестуєм",
//   })
// );

// const transporter = nodemailer.createTransport(config);
// const emailOptions = {
//   from: EMAIL,
//   to: "sikaka6853@mliok.com",
//   subject: "Testing message",
//   text: "Ми тестуємо надсилання листів!",
// };

// transporter
//   .sendMail(emailOptions)
//   .then((info) => console.log(info))
//   .catch((err) => console.log(err));

module.exports = sendEmail;
