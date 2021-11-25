const { sendMessageFunc } = require('../functions');
const responses = require('./responses');

module.exports.handler = async (event) => {
  const method = event.httpMethod;
  const body = JSON.parse(event.body);
  const headers = event.headers;

  /**
   * Only POST requests
   */
  switch (method) {
    case 'POST':
      const res = await sendMessageFunc(body, headers);

      return responses.success({
        success: true,
        result: res,
      });

    default:
      return responses.badRequest({
        success: false,
      });
  }
}
