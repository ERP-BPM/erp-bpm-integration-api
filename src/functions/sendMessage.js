const zb = require('zeebe-node');
const uuid = require('uuid')

module.exports.sendMessageFunc = async (payload, headers) => {
  const workflow_id = payload.id
  const { username, password } = headers
  const { message_name } = payload;

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

  console.log(workflow_id)

  const res = await zbc.publishMessage({
    correlationKey: workflow_id,
    messageId: uuid.v4(),
    name: message_name,
    variables: {},
    timeToLive: zb.Duration.seconds.of(1), // seconds
  });

  return res;
}
