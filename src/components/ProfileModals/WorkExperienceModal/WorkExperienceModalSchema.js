import * as Yup from 'yup';

export const WorkExperienceModalSchema = Yup.object().shape({
  position: Yup.string()
    .min(2, 'profile.modal.workExperience.position_long')
    .max(50, 'profile.modal.workExperience.position_short')
    .required('profile.modal.workExperience.required'),
  companyName: Yup.string()
    .min(2, 'profile.modal.workExperience.companyName_short')
    .max(100, 'profile.modal.workExperience.companyName_long')
    .required('profile.modal.workExperience.required'),
  description: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
  responsibilities: Yup.string()
    .min(2, 'profile.modal.workExperience.responsibilities_short')
    .max(50, 'profile.modal.workExperience.responsibilities_long'),
    // .required('profile.modal.workExperience.required'),
  startDate:Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .required('profile.modal.workExperience.required'),
  endDate: Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .required('profile.modal.workExperience.required')
});