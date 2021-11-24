import * as zb from 'zeebe-node';
import { sendEmail } from '../controllers'

export async function notifyPatientComesActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyPatientComesActivity...: ${variables}`);

  /**
  await sendEmail({
    to: 'a258177@alumnos.uaslp.mx',
    subject: 'Sending with SendGrid Is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }) */

  return job.complete();
}
