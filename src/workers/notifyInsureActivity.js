module.exports.notifyInsureActivity = (job) => {
  const { variables } = job;

  console.log(`* Starting notifyInsureActivity...: ${variables}`);

  job.complete();
}
