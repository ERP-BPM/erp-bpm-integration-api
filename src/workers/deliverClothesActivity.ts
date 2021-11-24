import * as zb from 'zeebe-node';

export async function deliverClothesActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting deliverClothesActivity...: ${variables}`);

  return job.complete();
}
