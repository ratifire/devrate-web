import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email('modal.registration.email_invalid').required('modal.registration.required'),
  country: Yup.string().required('modal.registration.required'),
  firstName: Yup.string()
    .min(2, 'modal.registration.first_name_short')
    .max(50, 'modal.registration.first_name_long')
    .required('modal.registration.required'),
  lastName: Yup.string()
    .min(2, 'modal.registration.last_name_short')
    .max(50, 'modal.registration.last_name_long')
    .required('modal.registration.required'),
  password: Yup.string()
    .min(6, 'modal.registration.password_short')
    .max(50, 'modal.registration.password_long')
    .required('modal.registration.required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'modal.registration.password_must_match')
    .required('modal.registration.required'),
  agreement: Yup.boolean()
    .oneOf([true], 'modal.registration.agreement_error')
    .required('modal.registration.agreement_error'),
});
