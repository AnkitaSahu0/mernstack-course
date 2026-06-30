// const transporter = require('../config/mail');

// const sendContactAlert = async (contactData) => {
//   const mailOptions = {
//     from: process.env.SMTP_USER,
//     to: process.env.SMTP_USER, // Send alert to self (Admin)
//     subject: `🚀 New Lead Generated: ${contactData.name}`,
//     html: `
//       <h2>New Query details:</h2>
//       <p><b>Name:</b> ${contactData.name}</p>
//       <p><b>Email:</b> ${contactData.email}</p>
//       <p><b>Phone:</b> ${contactData.phone || 'N/A'}</p>
//       <p><b>Interested Plan:</b> ${contactData.plan}</p>
//       <p><b>Message:</b> ${contactData.message}</p>
//     `
//   };
//   return transporter.sendMail(mailOptions);
// };

// module.exports = { sendContactAlert };


const transporter = require('../config/mail');

const sendContactAlert = async (contactData) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, 
    subject: `🚀 New Lead Generated: ${contactData.name}`,
    html: `
      <h2>New Query details:</h2>
      <p><b>Name:</b> ${contactData.name}</p>
      <p><b>Email:</b> ${contactData.email}</p>
      <p><b>Phone:</b> ${contactData.phone || 'N/A'}</p>
      <p><b>Interested Plan:</b> ${contactData.plan}</p>
      <p><b>Message:</b> ${contactData.message}</p>
    `
  };
  return transporter.sendMail(mailOptions);
};

module.exports = { sendContactAlert };