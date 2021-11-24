import * as zb from 'zeebe-node';

export async function changePatientInitialActivity(job: zb.ZeebeJob) {
  const { variables } = job;

  console.info(`* Starting changePatientInitialActivity...: ${variables}`);

  return job.complete();
}
