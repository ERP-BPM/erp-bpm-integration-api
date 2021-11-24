import * as zb from 'zeebe-node';

export async function assignBedActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting assignBedActivity...: ${variables}`);

  return job.complete();
}
