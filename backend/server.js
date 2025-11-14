const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: "https://globaldevelopers.vercel.app", // your frontend domain
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// ✅ POST route to send email
app.post("/send-mail", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  console.log("📨 Received data:", req.body);

  try {
    const response = await resend.emails.send({
      from: "Global Developers <onboarding@resend.dev>", // Default verified sender
      to: "divyaneela75@gmail.com", // Your receiving email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("✅ Email sent successfully:", response);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
