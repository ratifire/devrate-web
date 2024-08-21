import * as Yup from 'yup';

const resetPasswordSchema = Yup.object().shape({
  code: Yup.array()
    .of(Yup.string().required('modal.resetPassword.code_required').length(1, 'modal.resetPassword.code_symbol_min'))
    .length(6, 'modal.resetPassword.code_length_max'),
  newPassword: Yup.string()
    .required('modal.resetPassword.required')
    .min(7, 'modal.resetPassword.password_short')
    .max(50, 'modal.resetPassword.password_long')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%&!?*^()_+\-={}[\]|:;]{7,}$/,
      'modal.resetPassword.not_valid'
    ),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'modal.resetPassword.password_must_match')
    .required('modal.resetPassword.required'),
});

export default resetPasswordSchema;