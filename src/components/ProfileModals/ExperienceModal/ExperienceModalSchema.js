import * as Yup from 'yup';

export const ExperienceModalSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'profile.modal.workExperience.title.title_long')
    .max(50, 'profile.modal.workExperience.title.title_short')
    .required('profile.modal.workExperience.title.required'),
  company: Yup.string()
    .min(2, 'profile.modal.workExperience.company.company_short')
    .max(50, 'profile.modal.workExperience.company.company_long')
    .required('profile.modal.workExperience.company.required'),
  description: Yup.string()
    .min(2, 'profile.modal.workExperience.description.description_short')
    .max(50, 'profile.modal.workExperience.description.description_long')
    .required('profile.modal.workExperience.description.required'),
  responsibility: Yup.string()
    .min(2, 'profile.modal.workExperience.responsibility.responsibility_short')
    .max(50, 'profile.modal.workExperience.responsibility.responsibility_long')
    .required('profile.modal.workExperience.responsibility.required'),
});