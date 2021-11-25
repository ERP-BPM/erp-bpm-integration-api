module.exports.resultsRegisterActivity = (job) => {
  const { variables } = job;

  console.log(`* Starting resultsRegisterActivity...: ${variables}`);

  job.complete();
}
