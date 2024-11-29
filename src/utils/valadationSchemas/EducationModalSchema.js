import * as Yup from 'yup';

export const EducationModalSchema = Yup.object().shape({
  type: Yup.string()
    .min(2, 'profile.modal.education.speciality_short')
    .max(50, 'profile.modal.education.speciality_long')
    .required('profile.modal.education.required'),
  name: Yup.string()
    .min(2, 'profile.modal.education.edIstitution_short')
    .max(100, 'profile.modal.education.edIstitution_long')
    .required('profile.modal.education.required'),
  description: Yup.string()
    .min(40, 'profile.modal.education.description_short')
    .max(500, 'profile.modal.education.description_long')
    .required('profile.modal.education.required'),
  startYear: Yup.date()
    .min(new Date(1950, 0, 1), 'profile.modal.education.startDateMinMessage')
    .max(new Date(), 'profile.modal.education.startDateMaxMessage')
    .required('profile.modal.education.required'),
  endYear: Yup.mixed().test('endDate', 'profile.modal.education.endDateMessage', function (value) {
    const { startYear } = this.parent;
    if (!value) return true; // Allow empty value
    const endYearDate = value === 'Now' || value === '' ? new Date('9999-01-01') : new Date(value);
    return endYearDate > new Date(startYear);
  }),
});
