import * as Yup from 'yup';

export const HardSkillsValidationSchema = Yup.object().shape({
  skill: Yup
  .string()
  .max(100, 'specialization.modal.specialization.max_length')
});