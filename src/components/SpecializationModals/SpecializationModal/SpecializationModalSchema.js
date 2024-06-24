import * as Yup from 'yup';

export const SpecializationModalSchema = Yup.object().shape({
  name: Yup.string()
    .required('specialization.modal.specialization.required'),
  level: Yup.string()
    .required('specialization.modal.specialization.required'),
  main: Yup.string()
    .required('specialization.modal.specialization.required'),
});
