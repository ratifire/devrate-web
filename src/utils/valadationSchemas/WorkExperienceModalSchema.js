import * as Yup from 'yup';

const isStartYearBeforeEndYear = (startYear, endYear) => {
  if (startYear && endYear) {
    return startYear.getTime() < endYear.getTime();
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
  startYear: Yup.date()
    .min(new Date(1950, 0, 1), 'Date must be later than 01/01/1950')
    .max(new Date(), 'Date must be no later than the current year')
    .required('profile.modal.workExperience.required'),
  endYear: Yup.date()
    .min(Yup.ref('startYear'), 'End Date must be later than Start Date')
    .max(new Date(), 'End Date must be no later than the current year')
    .when('currentDate', {
      is: (currentDate) => !currentDate,  // When currentDate is false, endYear is required
      then: (schema) => schema.required('profile.modal.workExperience.required'),
      otherwise: (schema) => schema.nullable(),  // Make endYear optional if currentDate is true
    })
    .test('endYear', 'profile.modal.workExperience.endDateMessage', function (value) {
      const startYear = this.resolve(Yup.ref('startYear'));
      return isStartYearBeforeEndYear(startYear, value);
    }),
  currentDate: Yup.boolean(),
});
