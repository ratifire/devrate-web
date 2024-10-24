import * as Yup from 'yup';

const isStartYearBeforeEndYear = (startYear, endYear) => {
  if (startYear && endYear) {
    return startYear.getTime() <= endYear.getTime();
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
    .min(new Date(1950, 0, 1), 'profile.modal.workExperience.startYear_min')
    .max(new Date(), 'profile.modal.workExperience.startYear_max')
    .required('profile.modal.workExperience.required'),
  endYear: Yup.date()
    .min(Yup.ref('startYear'), 'profile.modal.workExperience.endDateMessage')
    .max(new Date(), 'profile.modal.workExperience.endYear_max')
    .when('currentDate', {
      is: (currentDate) => !currentDate,
      then: (schema) => schema.required('profile.modal.workExperience.required'),
      otherwise: (schema) => schema.nullable(),
    })
    .test('endYear', 'profile.modal.workExperience.endDateMessage', function (value) {
      const startYear = this.resolve(Yup.ref('startYear'));
      return isStartYearBeforeEndYear(startYear, value);
    }),
  currentDate: Yup.boolean(),
});
