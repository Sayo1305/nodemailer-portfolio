const express = require("express");
const app = express();
const port = 9000;
require("dotenv").config();
const nodemailer = require("nodemailer");
const ContactEmailTemplate = require("./emailTemplate");
var cors = require('cors')

app.use(express.json());
var corsOptions = {
      origin: ['http://localhost:3000' , 'https://unnatdas.netlify.app'],
      optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


app.get("/", (req, res) => {
   return res.status(200).json({ ok: true, msg: "Backend working!" });
});

app.post("/send_mail", async (req, res) => {
   try {
      const { name, email, subject, message, password } = req.body;
      if (!email || !subject || !message) {
            return res.status(404).json({ ok: false, msg: "Please enter all the required fields" });
      }
      if (email === "" || subject === "" || message === "") {
         return res.status(404).json({ ok: false, msg: "Please enter all the required fields" });
      }
      if (password !== process.env.SECRET_KEY) {
         return res.status(404).json({ ok: false, msg: "Authentication failed" });
      }
      const transporter = nodemailer.createTransport({
         service: "gmail",
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
         },
      });
      const mailOptions = {
         from: process.env.EMAIL,
         to: process.env.EMAIL,
         subject: `Message from ${email} (PORTFOLIO)`,
         html: ContactEmailTemplate(name, email, subject, message),
      };
      transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
            return res.status(500).json({ ok: false, msg: "Failed to send reset email" });
         } else {
            return res.status(200).json({ ok: true, msg: "email sent" });
         }
      });
   } catch (err) {
      console.error(err);
      return res.status(500).json({ ok: false, msg: "Internal Server Error" });
   }
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
