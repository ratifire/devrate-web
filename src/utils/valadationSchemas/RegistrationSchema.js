import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'modal.registration.email_invalid')
    .email('modal.registration.email_invalid')
    .required('modal.registration.required'),
  country: Yup.string().required('modal.registration.required'),
  firstName: Yup.string()
    .min(2, 'modal.registration.first_name_short')
    .max(50, 'modal.registration.first_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'modal.registration.first_name_invalid_characters'
    )
    .required('modal.registration.required'),
  lastName: Yup.string()
    .min(2, 'modal.registration.last_name_short')
    .max(50, 'modal.registration.last_name_long')
    .matches(
      /^[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\s\-']*[a-zA-Zа-щА-ЩґҐєЄіІїЇьЬ\-']$/,
      'modal.registration.first_name_invalid_characters'
    )
    .required('modal.registration.required'),
  password: Yup.string()
    .min(7, 'modal.registration.password_short') 
    .max(50, 'modal.registration.password_long')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, 'modal.registration.password_invalid') 
    .required('modal.registration.required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'modal.registration.password_must_match')
    .required('modal.registration.required'),
  agreement: Yup.boolean()
    .oneOf([true], 'modal.registration.agreement_error')
    .required('modal.registration.agreement_error'),
});
