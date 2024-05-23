import * as Yup from 'yup';

export const ExperienceModalSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'profile.modal.workExperience.title.title_long')
    .max(50, 'profile.modal.workExperience.title.title_short')
    .required('profile.modal.workExperience.title.required'),
  company: Yup.string()
    .min(2, 'profile.modal.workExperience.company.company_short')
    .max(100, 'profile.modal.workExperience.company.company_long')
    .required('profile.modal.workExperience.company.required'),
  description: Yup.string()
    .min(2, 'profile.modal.workExperience.description.description_short')
    .max(500, 'profile.modal.workExperience.description.description_long')
    .required('profile.modal.workExperience.description.required'),
  duty: Yup.string()
    .min(2, 'profile.modal.workExperience.duty.duty_short')
    .max(50, 'profile.modal.workExperience.duty.duty_long')
    .required('profile.modal.workExperience.duty.required'),
});