module.exports.notifyNoInsurance = (job) => {
  const { variables } = job;

  console.log(`* Starting notifyNoInsurance...: ${variables}`);

  job.complete();
}
