import * as Yup from 'yup';

export const SpecializationModalSchema = Yup.object().shape({
  name: Yup.string()
    .required('specialization.modal.specialization.required'),
  mastery: Yup.string()
    .required('specialization.modal.specialization.required'),
  skills: Yup.string()
    .min(2, 'specialization.modal.skills.skill_short')
    .max(50, 'profile.modal.workExperience.skill_long')
    // .required('specialization.modal.specialization.required'),
});
