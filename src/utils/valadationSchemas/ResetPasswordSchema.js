import * as Yup from 'yup';

const resetPasswordSchema = Yup.object().shape({
  code: Yup.array()
    .of(Yup.string().required('modal.resetPassword.code_required').length(1, 'modal.resetPassword.code_symbol_min'))
    .length(6, 'modal.resetPassword.code_length_max'),
  newPassword: Yup.string()
    .min(8, 'modal.resetPassword.password_short')
    .max(50, 'modal.resetPassword.password_long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/,
      'modal.resetPassword.password_invalid',
    )
    .required('modal.resetPassword.required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'modal.resetPassword.password_must_match')
    .required('modal.resetPassword.required'),
});

export default resetPasswordSchema;