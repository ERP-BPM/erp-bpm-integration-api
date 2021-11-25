const sgMail = require("@sendgrid/mail");

module.exports.sendEmail = async (params) => {
  const { to, subject, text, html } = params

  const msg = {
    from: 'pgrasplu@gmail.com',
    to,
    subject,
    text,
    html
  }

  await sgMail.send(msg);
}
