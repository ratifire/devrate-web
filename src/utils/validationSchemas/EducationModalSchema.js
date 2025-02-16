import * as Yup from 'yup';

const isStartYearBeforeEndYear = (startYear, endYear) =>
  !startYear || !endYear || startYear.getTime() <= endYear.getTime();

export const EducationModalSchema = Yup.object().shape({
  type: Yup.string()
    .min(2, 'profile.modal.education.speciality_short')
    .max(50, 'profile.modal.education.speciality_long')
    .required('profile.modal.education.required'),
  name: Yup.string()
    .min(2, 'profile.modal.education.edInstitution_short')
    .max(100, 'profile.modal.education.edInstitution_long')
    .required('profile.modal.education.required'),
  description: Yup.string()
    .min(40, 'profile.modal.education.description_short')
    .max(500, 'profile.modal.education.description_long')
    .required('profile.modal.education.required'),
  startYear: Yup.date()
    .min(new Date(1950, 0, 1), 'profile.modal.education.startDateMinMessage')
    .max(new Date(), 'profile.modal.education.startDateMaxMessage')
    .required('profile.modal.education.required'),
  endYear: Yup.date()
    .min(Yup.ref('startYear'), 'profile.modal.education.endDateMessage')
    .when('isCurrentDate', {
      is: (isCurrentDate) => !isCurrentDate,
      then: (schema) => schema.required('profile.modal.education.required'),
      otherwise: (schema) => schema.nullable(),
    })
    .test('endYear', 'profile.modal.education.endDateMessage', function (value) {
      const startYear = this.resolve(Yup.ref('startYear'));
      return isStartYearBeforeEndYear(startYear, value);
    }),
  isCurrentDate: Yup.boolean(),
});
