import * as zb from 'zeebe-node';

export async function assignIdPatientActvity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting assignIdPatientActvity...: ${variables}`);

  return job.complete();
}
