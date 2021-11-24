import { startProcessFunc } from '../functions';
import * as responses from './responses'
import sgMail = require("@sendgrid/mail");
import { sendgridApiKey } from './env';

sgMail.setApiKey(sendgridApiKey);

export const handler = async (event: any) => {
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
