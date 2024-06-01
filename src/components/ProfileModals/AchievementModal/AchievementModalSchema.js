import * as Yup from 'yup';

export const AchievementModalSchema = Yup.object().shape({
  link: Yup.string()
    .min(2, 'profile.modal.workExperience.position_long')
    .max(50, 'profile.modal.workExperience.position_short')
    .required('profile.modal.workExperience.required'),
  summary: Yup.string()
    .min(2, 'profile.modal.workExperience.companyName_short')
    .max(100, 'profile.modal.workExperience.companyName_long')
    .required('profile.modal.workExperience.required'),
  description: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
});
