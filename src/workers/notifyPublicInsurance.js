module.exports.notifyPublicInsurance = (job) => {
  const { variables } = job;

  console.info(`* Starting notifyPublicInsurance...: ${variables}`);

  job.complete();
}
