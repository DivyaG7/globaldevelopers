const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// ✅ Configure CORS properly for both local and live frontend
app.use(
  cors({
    origin: ["http://localhost:3000", "https://globaldevelopers.vercel.app"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());

// ✅ Contact form route
app.post("/send-mail", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  console.log("📩 Incoming data:", req.body);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || "divyaneela75@gmail.com",
        pass: process.env.EMAIL_PASS || "ttwpjwqkhahlrgyh",
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

    console.log("📤 Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email", error: error.message });
  }
});

// ✅ Use Render's assigned port when deployed
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
