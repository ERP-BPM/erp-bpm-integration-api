module.exports.notifyPrivateInsurance = (job) => {
  const { variables } = job;

  console.log(`* Starting notifyPrivateInsurance...: ${variables}`);

  job.complete();
}
