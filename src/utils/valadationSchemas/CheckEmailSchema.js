import * as Yup from 'yup';

export const CheckEmailSchema = Yup.object().shape({
  email: Yup.string()
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'modal.checkEmailResetPassword.email_invalid'
  )
    .email('modal.checkEmailResetPassword.email_invalid')
    .required('modal.checkEmailResetPassword.required'),
});
