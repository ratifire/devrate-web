import * as Yup from 'yup';

export const SpecializationModalSchema = Yup.object().shape({
  name: Yup.string()
    .required('specialization.modal.specialization.required'),
  mastery: Yup.string()
    .required('specialization.modal.specialization.required'),
  skills: Yup.string()
    .max(100, 'specialization.modal.specialization.max_length')
});
