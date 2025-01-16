import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

export const ModalUserInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.first_name_short')
    .max(50, 'profile.modal.userInfo.personal.first_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'profile.modal.userInfo.personal.first_name_invalid_characters'
    )
    .required('profile.modal.userInfo.personal.required'),
  lastName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.last_name_short')
    .max(50, 'profile.modal.userInfo.personal.last_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'profile.modal.userInfo.personal.last_name_invalid_characters'
    )
    .required('profile.modal.userInfo.personal.required'),
  city: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.last_name_short')
    .max(100, 'profile.modal.userInfo.personal.last_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'profile.modal.userInfo.personal.city_invalid_characters'
    ),
  country: Yup.string().required('profile.modal.userInfo.personal.required'),
  status: Yup.string().optional(),
  aboutMe: Yup.string().optional(),
  telegram: Yup.string().optional(),
  linkedIn: Yup.string().optional(),
  gitHub: Yup.string().optional(),
  behance: Yup.string().optional(),
  email: emailValidationSchema,
  phone: Yup.string().optional(),
});
