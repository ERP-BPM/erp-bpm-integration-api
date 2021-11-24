import * as zb from 'zeebe-node';

export async function resultsRegisterActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting resultsRegisterActivity...: ${variables}`);

  return job.complete();
}
