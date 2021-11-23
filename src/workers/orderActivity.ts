import * as zb from 'zeebe-node';

export function orderActivityWorker(job: zb.ZeebeJob) {
  const { variables } = job;
  console.info(`* Starting Order...: ${variables}`);

  //const stock = 100; //Aqui se revisa el stock con una request
  console.info(`* Passing to next task: ${variables}`);

  return job.complete();
}
