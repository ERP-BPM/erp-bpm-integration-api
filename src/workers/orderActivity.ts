import * as zb from 'zeebe-node';

export function orderActivityWorker(job: zb.ZeebeJob) {
  const { variables } = job;
  console.info(`* Starting Order...: ${variables}`);

  console.info(`* Passing to next task: ${variables}`);

  return job.complete();
}
