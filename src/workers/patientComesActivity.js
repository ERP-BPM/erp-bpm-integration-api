module.exports.patientComesActivity = (job) => {
  const { variables } = job;

  console.info(`* Starting patientComesActivity...: ${variables}`);

  job.complete();
}
