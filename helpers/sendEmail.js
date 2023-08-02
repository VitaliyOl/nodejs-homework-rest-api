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

module.exports = sendEmail;
