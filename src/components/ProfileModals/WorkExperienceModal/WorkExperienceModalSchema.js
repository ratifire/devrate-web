import * as Yup from 'yup';

export const WorkExperienceModalSchema = Yup.object().shape({
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
    .max(50, 'profile.modal.workExperience.duty.duty_long'),
    // .required('profile.modal.workExperience.duty.required'),
  startDate:Yup.date()
    .min(new Date(1900, 0, 1), 'Date of birth must be later than 01/01/1900')
    .max(new Date(), 'Date of birth must be earlier than today')
    .required('profile.modal.workExperience.startDate.required'),
  endDate: Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .required('profile.modal.workExperience.endDate.required')
});