module.exports.notifyDoctorActivity = (job) => {
  const { variables } = job;

  console.info(`* Starting notifyDoctorActivity...: ${variables}`);

  job.complete();
}
