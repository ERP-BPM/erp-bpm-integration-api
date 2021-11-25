module.exports.notifyDischargeActivity = (job) => {
  const { variables } = job;

  console.info(`* Starting notifyDischargeActivity...: ${variables}`);

  job.complete();
}
