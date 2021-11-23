import * as zb from 'zeebe-node';
import { v4 as uuidv4 } from 'uuid'

export const sendMessageFunc = async (params: {
  data: any,
  zeebe_credentials: any,
}): Promise<any> => {
  const { data, zeebe_credentials } = params;

  const { message_name, workflow_id, variables } = data;

  const zbc = new zb.ZBClient(zeebe_credentials, { loglevel: 'INFO' });

  console.log(workflow_id)
  variables.status = 'PROCESSED'

  const res = await zbc.publishMessage({
    correlationKey: workflow_id,
    messageId: uuidv4(),
    name: message_name,
    variables: variables,
    timeToLive: zb.Duration.seconds.of(1), // seconds
  });

  return res;
}
