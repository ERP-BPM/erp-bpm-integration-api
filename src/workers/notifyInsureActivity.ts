import * as zb from 'zeebe-node';

export async function notifyInsureActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyInsureActivity...: ${variables}`);

  return job.complete();
}
