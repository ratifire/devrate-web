import * as Yup from 'yup';


export const ScheduleSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'profile.modal.workExperience.companyName_short')
    .max(100, 'profile.modal.workExperience.companyName_long')
    .required('profile.modal.workExperience.required'),
  speciality: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
  level: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
  role: Yup.string()
    .min(2, 'profile.modal.workExperience.description_short')
    .max(500, 'profile.modal.workExperience.description_long')
    .required('profile.modal.workExperience.required'),
  date:Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .required('Start date is required'),
  startTime: Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today')
    .required('Start date is required'),
  endTime: Yup.date()
    .min(new Date(1900, 0, 1), 'Date must be later than 01/01/1900')
    .max(new Date(), 'Date must be earlier than today'),
  socialLinks: Yup.array().of(
    Yup.string()
      .min(2, 'profile.modal.workExperience.description_short')
      .max(500, 'profile.modal.workExperience.description_long')
      .required('profile.modal.workExperience.required'),
  )
});