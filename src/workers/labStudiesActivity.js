module.exports.labStudiesActivity = async (job) => {
  const { variables } = job;

  console.info(`* Starting labStudiesActivity...: ${variables}`);

  job.complete();
}
