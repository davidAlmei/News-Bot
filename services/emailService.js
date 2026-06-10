const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(html) {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `📰 Morning Brief - ${today}`,
    html,
  });
}

module.exports = { sendEmail };