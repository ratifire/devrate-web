import * as Yup from 'yup';

const isStartDateBeforeEndDate = (startDate, endDate) => {
  if (startDate && endDate) {
    return startDate.getTime() < endDate.getTime();
  }
  return true;
};

export const WorkExperienceModalSchema = Yup.object().shape({
  position: Yup.string()
    .min(2, 'profile.modal.workExperience.position_short')
    .max(50, 'profile.modal.workExperience.position_long')
    .required('profile.modal.workExperience.required'),
  companyName: Yup.string()
    .min(2, 'profile.modal.workExperience.companyName_short')
    .max(100, 'profile.modal.workExperience.companyName_long')
    .required('profile.modal.workExperience.required'),
  description: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
  responsibilities: Yup.string()
    .min(2, 'profile.modal.workExperience.responsibilities_short')
    .max(50, 'profile.modal.workExperience.responsibilities_long'),
  // .required('profile.modal.workExperience.required'),
  startDate: Yup.date()
    .min(new Date(1950, 0, 1), 'Date must be later than 01/01/1950')
    .max(new Date(), 'profile.modal.workExperience.startDateMaxMessage')
    .required('profile.modal.workExperience.required'),
  endDate: Yup.date()
    .min(new Date(1950, 0, 1), 'profile.modal.workExperience.startDateMinMessage')
    .required('End date is required')
    .test('endDate', 'profile.modal.workExperience.endDateMessage', function (value) {
      const startDate = this.resolve(Yup.ref('startDate'));
      return isStartDateBeforeEndDate(startDate, value);
    }),
});