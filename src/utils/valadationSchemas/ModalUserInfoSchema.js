import * as Yup from 'yup';

export const ModalUserInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.first_name_long')
    .max(50, 'profile.modal.userInfo.personal.first_name_short')
    .required('profile.modal.userInfo.personal.required'),
  lastName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.last_name_short')
    .max(50, 'profile.modal.userInfo.personal.last_name_long')
    .required('profile.modal.userInfo.personal.required'),
  city: Yup.string().optional(),
  country: Yup.string().required('profile.modal.userInfo.personal.required'),
  status: Yup.string().optional(),
  aboutMe: Yup.string().optional(),
  telegram: Yup.string().optional(),
  linkedIn: Yup.string().optional(),
  gitHub: Yup.string().optional(),
  behance: Yup.string().optional(),
  mail: Yup.string().required('profile.modal.userInfo.personal.required'),
  phone: Yup.string().optional(),
});
