import * as zb from 'zeebe-node';

export async function notifyPublicInsurance(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyPublicInsurance...: ${variables}`);

  return job.complete();
}
