import nodemailer from "nodemailer";

export const sendMail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, 
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};
