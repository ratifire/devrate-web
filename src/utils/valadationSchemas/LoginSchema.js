import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('modal.login.email_invalid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'modal.login.email_invalid')
    .required('modal.login.required'),
  password: Yup.string()
    .min(6, 'modal.login.password_short')
    .max(50, 'modal.login.password_long')
    .required('modal.login.required'),
});
