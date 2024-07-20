import * as Yup from 'yup';

export const EducationModalSchema = Yup.object().shape({
  type: Yup.string()
    .min(2, 'profile.modal.workExperience.position_long')
    .max(50, 'profile.modal.workExperience.position_short')
    .required('profile.modal.workExperience.required'),
  name: Yup.string()
    .min(2, 'profile.modal.workExperience.companyName_short')
    .max(100, 'profile.modal.workExperience.companyName_long')
    .required('profile.modal.workExperience.required'),
  description: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
  startYear:Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .required('Start date is required'),
  endYear: Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .nullable()
    .test('endDate', 'End date must be later than start date', function (value) {
      const { startYear } = this.parent;
      return value >= startYear;
    }),
});
