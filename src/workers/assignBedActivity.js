module.exports.assignBedActivity = async (job) => {
  const { variables } = job;

  console.info(`* Starting assignBedActivity...: ${variables}`);

  job.complete();
}
