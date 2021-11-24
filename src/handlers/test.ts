import * as zb from 'zeebe-node';
import sgMail = require("@sendgrid/mail");
import { sendgridApiKey } from './env';


export const handler = async (event: any) => {
  console.log(sgMail)

  console.log('Hola desde lambda');
  console.log(event);

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
