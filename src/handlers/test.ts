import * as zb from 'zeebe-node';
import sgMail = require("@sendgrid/mail");
import { sendgridApiKey } from './env';


export const handler = async (event: any) => {
  console.log(sgMail)
  sgMail.setApiKey(sendgridApiKey);

  console.log('Hola desde lambda');
  console.log(event);


  const msg = {
    to: 'a258177@alumnos.uaslp.mx',
    // Change to your recipient
    from: 'joseluisrojasaranda@gmail.com',
    // Change to your verified sender
    subject: 'Sending with SendGrid Is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  const result = await sgMail.send(msg);
  console.log(result);

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
