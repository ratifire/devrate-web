import * as Yup from 'yup';

export const SpecializationModalSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'specialization.modal.specialization.title_long')
    .max(50, 'specialization.modal.specialization.title_short')
    .required('specialization.modal.specialization.required'),
  level: Yup.string()
    .required('specialization.modal.specialization.required'),
  main: Yup.string()
    .required('specialization.modal.specialization.required'),
});
