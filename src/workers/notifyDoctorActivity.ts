import * as zb from 'zeebe-node';

export async function notifyDoctorActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting notifyDoctorActivity...: ${variables}`);

  return job.complete();
}
