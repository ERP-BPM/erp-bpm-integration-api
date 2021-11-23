import * as zb from 'zeebe-node';
import sgMail = require("@sendgrid/mail");

export async function sendEmailWorker(job: zb.ZeebeJob) {
  const msg = {
    to: 'joseluisrojasaranda@gmail.com',
    // Change to your recipient
    from: 'joseluisrojasaranda@gmail.com',
    // Change to your verified sender
    subject: 'Sending with SendGrid Is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  await sgMail.send(msg);

  return job.complete();
}
