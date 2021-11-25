const { startProcessFunc } = require('../functions');
const responses = require('./responses');
const sgMail = require("@sendgrid/mail");
const { sendgridApiKey } = require('./env');

sgMail.setApiKey(sendgridApiKey);

module.exports.handler = async (event) => {
  const method = event.httpMethod;
  const body = JSON.parse(event.body);
  const headers = event.headers;

  /**
   * Only POST requests
   */
  switch (method) {
    case 'POST':
      const wfi = await startProcessFunc(body, headers);

      return responses.success({
        success: true,
        res: body,
        wfi,
      });

    default:
      return responses.badRequest({
        success: false,
      });
  }
}
