module.exports.orderActivityWorker = (job) => {
  const { variables } = job;
  console.info(`* Starting Order...: ${variables}`);

  console.info(`* Passing to next task: ${variables}`);

  job.complete();
}
