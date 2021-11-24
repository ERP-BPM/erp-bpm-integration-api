import * as zb from 'zeebe-node';

export async function patientComesActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting patientComesActivity...: ${variables}`);

  return job.complete();
}
