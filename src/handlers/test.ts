import * as zb from 'zeebe-node';
import sgMail = require("@sendgrid/mail");
import { sendgridApiKey } from './env';
import { sendEmail } from '../controllers';

sgMail.setApiKey(sendgridApiKey);

export const handler = async (event: any) => {
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
