import * as zb from 'zeebe-node';
import { orderActivityWorker } from '../workers';

export const startProcessFunc = async (payload: any, headers: any): Promise<any> => {
  const { username, password } = headers

  const zbc = new zb.ZBClient(
    'https://api.camunda.cloud.angelalvaradohdz.me',
    {
      "basicAuth": {
        username: username,
        password: password
      },
      useTLS: false
    }
  );

  zbc.createWorker(
    {
      taskType: 'activity-task',
      taskHandler: orderActivityWorker,
    }
  );

  const wfi = await zbc.createProcessInstance("single-process", { workflow_id: payload.id });

  return wfi;
}
