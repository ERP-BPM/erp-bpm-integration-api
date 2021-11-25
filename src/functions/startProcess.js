const zb = require('zeebe-node');
const { notifyPrivateInsurance, notifyPublicInsurance, notifyInsureActivity, patientComesActivity, notifyPatientComesActivity, changePatientInitialActivity, notifyNoInsurance, assignIdPatientActvity, assignBedActivity, deliverClothesActivity, notifyDoctorActivity, labStudiesActivity, resultsRegisterActivity, notifyDischargeActivity } = require('../workers');

module.exports.startProcessFunc = async (payload, headers) => {
  const { username, password } = headers

  const zbc = new zb.ZBClient(
    'https://api.camunda.cloud.angelalvaradohdz.me',
    {
      "basicAuth": {
        username: username,
        password: password
      },
      useTLS: false
    }
  );

  zbc.createWorker(
    {
      taskType: 'patient-comes-activity',
      taskHandler: patientComesActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify-patient-comes-activity',
      taskHandler: notifyPatientComesActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'change-patient-initial-activity',
      taskHandler: changePatientInitialActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify-insure-activity',
      taskHandler: notifyInsureActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify-public-insurance',
      taskHandler: notifyPublicInsurance,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify-private-insurance',
      taskHandler: notifyPrivateInsurance,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify_no_insurance',
      taskHandler: notifyNoInsurance,
    }
  );

  zbc.createWorker(
    {
      taskType: 'assign-id-patient-actvity',
      taskHandler: assignIdPatientActvity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'assign-bed-activity',
      taskHandler: assignBedActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'deliver-clothes-activity',
      taskHandler: deliverClothesActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify-doctor-activity',
      taskHandler: notifyDoctorActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'lab-studies-activity',
      taskHandler: labStudiesActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'results-register-activity',
      taskHandler: resultsRegisterActivity,
    }
  );

  zbc.createWorker(
    {
      taskType: 'notify-discharge-activity',
      taskHandler: notifyDischargeActivity,
    }
  );

  const wfi = await zbc.createProcessInstance(
    "single-process",
    { workflow_id: payload.id },
  );

  return wfi;
}
