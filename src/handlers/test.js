const sgMail = require("@sendgrid/mail");
const { sendgridApiKey } = require('./env');
const { sendEmail } = required('../controllers');

sgMail.setApiKey(sendgridApiKey);

module.exports.handler = async (event) => {
  console.log('Hola desde lambda');
  console.log(event);

  await sendEmail({
    to: 'a258177@alumnos.uaslp.mx',
    subject: 'Sending with SendGrid Is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  })

  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      hola: 'adios',
    }),
  }
}
