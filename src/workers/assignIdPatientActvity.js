module.exports.assignIdPatientActvity = (job) => {
  const { variables } = job;

  console.info(`* Starting assignIdPatientActvity...: ${variables}`);

  job.complete();
}
