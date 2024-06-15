import * as Yup from 'yup';

export const CheckEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('modal.checkEmailResetPassword.email_invalid')
    .required('modal.checkEmailResetPassword.required'),
});
