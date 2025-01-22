import * as Yup from 'yup';
import regEx from '../constants/regularExpressions';

const resetPasswordSchema = Yup.object().shape({
  code: Yup.array()
    .of(Yup.string().required('modal.resetPassword.code_required').length(1, 'modal.resetPassword.code_symbol_min'))
    .length(6, 'modal.resetPassword.code_length_max'),
  newPassword: Yup.string()
    .trim()
    .min(8, 'modal.resetPassword.password_short')
    .max(50, 'modal.resetPassword.password_long')
    .matches(regEx.passwordValidationRegex, 'modal.resetPassword.password_invalid')
    .required('modal.resetPassword.required'),
  repeatPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('newPassword'), null], 'modal.resetPassword.password_must_match')
    .required('modal.resetPassword.required'),
});

export default resetPasswordSchema;
