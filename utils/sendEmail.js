import nodemailer from "nodemailer";

export async function sendEmailNotification(receipts, subject, html) {
  const port = Number(process.env.EMAIL_PORT);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: port,
    secure: secure,
    auth: {
      user: process.env.EMAIL_TITLE,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
  });

  const mailOptions = {
    from: `"AIMS - AI Medical Scriber" <${process.env.EMAIL_TITLE}>`,
    to: receipts,
    subject: subject,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email send error:", error.message);
    throw error;
  }
}
