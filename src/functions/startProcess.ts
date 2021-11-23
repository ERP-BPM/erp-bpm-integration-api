import * as zb from 'zeebe-node';
import { v4 as uuidv4 } from 'uuid'
import { orderActivityWorker } from '../workers';

export const startProcessFunc = async (params: {
  data: any,
  zeebe_credentials: any,
}): Promise<any> => {
  const { data, zeebe_credentials } = params;

  const zbc = new zb.ZBClient(zeebe_credentials, { loglevel: 'INFO' });

  // example worker
  zbc.createWorker({
    taskType: 'order-activity',
    taskHandler: orderActivityWorker,
  });

  data.orderid = uuidv4()

  const wfi = await zbc.createProcessInstance("process-orders", data);

  return wfi;
}
