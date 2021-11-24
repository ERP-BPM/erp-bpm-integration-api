import * as zb from 'zeebe-node';

export async function notifyPrivateInsurance(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyPrivateInsurance...: ${variables}`);

  return job.complete();
}
