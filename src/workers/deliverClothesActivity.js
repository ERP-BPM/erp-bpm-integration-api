module.exports.deliverClothesActivity = (job) => {
  const { variables } = job;

  console.info(`* Starting deliverClothesActivity...: ${variables}`);

  job.complete();
}
