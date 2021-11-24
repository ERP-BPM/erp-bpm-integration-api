import * as zb from 'zeebe-node';

export async function labStudiesActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting labStudiesActivity...: ${variables}`);

  return job.complete();
}
