import * as Yup from 'yup';

export const AchievementModalSchema = Yup.object().shape({
  link: Yup.string()
    .min(10, 'profile.modal.workExperience.position_short')
    .max(200, 'profile.modal.workExperience.position_long')
    .url('Invalid URL format')
    .required('profile.modal.workExperience.required'),
  summary: Yup.string().trim()
    .min(2, 'profile.modal.workExperience.companyName_short')
    .max(100, 'profile.modal.workExperience.companyName_long')
    .required('profile.modal.workExperience.required'),
  description: Yup.string().trim()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
});
