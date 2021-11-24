import sgMail = require("@sendgrid/mail");

export async function sendEmail(params: {
  to: string,
  subject: string,
  text: string,
  html: string
}) {
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
