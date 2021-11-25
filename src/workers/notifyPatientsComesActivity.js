module.exports.notifyPatientComesActivity = (job) => {
  const { variables } = job;

  console.log(`* Starting notifyPatientComesActivity...: ${variables}`);

  /**
  await sendEmail({
    to: 'a258177@alumnos.uaslp.mx',
    subject: 'Sending with SendGrid Is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }) */

  return job.complete();
}
