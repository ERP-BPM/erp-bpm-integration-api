import * as zb from 'zeebe-node';

export async function notifyDischargeActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyDischargeActivity...: ${variables}`);

  return job.complete();
}
