const nodemailer = require("nodemailer");
const credential = require('../config/credential');
const tp={}

tp.email=credential.email
tp.transporter = nodemailer.createTransport({
	host: "smtp.live.com",
	port: 25,
	secure: false, // true for 465, false for other ports
	auth: {
		user: tp.email,
		pass: credential.email
	},
	tls: { rejectUnauthorized: false }
  })

  module.exports = tp;