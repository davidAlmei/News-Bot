const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(html) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "📰 Daily Morning Brief",
    html,
  });
}

module.exports = { sendEmail };