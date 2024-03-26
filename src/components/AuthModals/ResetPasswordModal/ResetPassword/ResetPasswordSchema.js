import * as Yup from 'yup';

export const ResetPasswordSchema = () => {
  return Yup.object().shape({
    password: Yup.string()
      .min(6, 'modal.resetPassword.password_short')
      .max(50, 'modal.resetPassword.password_long')
      .required('modal.resetPassword.required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'modal.resetPassword.password_must_match')
      .required('modal.resetPassword.required'),
  });
};
