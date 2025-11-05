const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-mail", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  console.log("Incoming data:", req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || "divyaneela75@gmail.com",
      pass: process.env.EMAIL_PASS || "ttwpjwqkhahlrgyh"
    },
  });

  const mailOptions = {
    from: "divyaneela75@gmail.com",
    to: "divyaneela75@gmail.com",
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error); // Log full error
    res.status(500).send("Error sending email");
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
