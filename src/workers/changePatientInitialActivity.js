module.exports.changePatientInitialActivity = (job) => {
  const { variables } = job;

  console.info(`* Starting changePatientInitialActivity...: ${variables}`);

  job.complete();
}
