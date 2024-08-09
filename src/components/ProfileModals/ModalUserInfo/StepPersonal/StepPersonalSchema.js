import * as Yup from 'yup';

export const StepPersonalSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.first_name_long')
    .max(50, 'profile.modal.userInfo.personal.first_name_short')
    .required('profile.modal.userInfo.personal.required'),
  lastName: Yup.string()
    .min(2, 'profile.modal.userInfo.personal.last_name_short')
    .max(50, 'profile.modal.userInfo.personal.last_name_long')
    .required('profile.modal.userInfo.personal.required'),
  city: Yup.string()
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-'']*([a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-''])?$/,
      'profile.modal.userInfo.personal.city_invalid'
    )
    .min(2, 'profile.modal.userInfo.personal.city_short')
    .max(25, 'profile.modal.userInfo.personal.city_long')
    .optional(),
  country: Yup.string().required('profile.modal.userInfo.personal.required'),
  status: Yup.string().max(50, 'profile.modal.userInfo.personal.status_too_long').optional(),
  description: Yup.string().max(480, 'profile.modal.userInfo.personal.about_me_too_long').optional(),
});
