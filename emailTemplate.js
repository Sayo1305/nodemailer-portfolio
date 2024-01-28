function ContactEmailTemplate(name = "No Name", email, subject, message) {
  return `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
  <style>
    /* Add your custom CSS styles here */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      box-sizing: border-box;
    }
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo img {
      max-width: 100%;
      height: auto;
    }
    .ButtonStyle {
      display: inline-block;
      padding: 10px 20px;
      text-align: center;
      background: #6161FF;
      border-radius: 5px;
      text-decoration: none;
      color: #fff !important;
    }
    .ButtonStyle:hover {
      background: #4040b2;
    }
    a {
      text-decoration: none;
      color: #4040b2;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <img src="https://res.cloudinary.com/dqpirrbuh/image/upload/v1706458646/emailSent.jpg" alt="Your Logo">
    </div>
    <h2>Contact Form Submission</h2>
    <p>Hello,</p>
    <p>You have received a new message from your portfolio's contact form:</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p>Please respond to the user's email at your earliest convenience.</p>
  </div>
</body>
</html>
`;
}

module.exports = ContactEmailTemplate;


