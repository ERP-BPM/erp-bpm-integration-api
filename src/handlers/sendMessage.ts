import { sendMessageFunc } from '../functions';
import * as responses from './responses'

export const handler = async (event: any) => {
  const method = event.httpMethod;
  const body = JSON.parse(event.body);

  const { data, zeebe_credentials } = body;

  /**
   * Only POST requests
   */
  switch (method) {
    case 'POST':
      const res = await sendMessageFunc({
        data,
        zeebe_credentials,
      });

      return responses.success({
        success: true,
        variables: data,
        result: res,
      });

    default:
      return responses.badRequest({
        success: false,
      });
  }
}
