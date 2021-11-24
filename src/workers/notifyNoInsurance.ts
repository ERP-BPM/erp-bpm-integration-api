import * as zb from 'zeebe-node';

export async function notifyNoInsurance(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyNoInsurance...: ${variables}`);

  return job.complete();
}
