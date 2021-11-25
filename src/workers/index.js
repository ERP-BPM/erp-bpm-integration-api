module.exports = {
  ...require('./orderActivity'),
  ...require('./assignBedActivity'),
  ...require('./assignIdPatientActvity'),
  ...require('./changePatientInitialActivity'),
  ...require('./deliverClothesActivity'),
  ...require('./labStudiesActivity'),
  ...require('./notifyDischargeActivity'),
  ...require('./notifyDoctorActivity'),
  ...require('./notifyInsureActivity'),
  ...require('./notifyNoInsurance'),
  ...require('./notifyPatientsComesActivity'),
  ...require('./notifyPrivateInsurance'),
  ...require('./notifyPublicInsurance'),
  ...require('./patientComesActivity'),
  ...require('./resultsRegisterActivity')
}
