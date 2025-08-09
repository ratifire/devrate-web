import * as Yup from 'yup';
import regEx from '@utils/constants/regularExpressions.js';

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, 'modal.registration.password_short')
    .max(50, 'modal.registration.password_long')
    .matches(regEx.passwordValidationRegex, 'modal.registration.password_invalid')
    .required('modal.registration.required'),
  newPassword: Yup.string()
    .min(6, 'modal.registration.password_short')
    .max(50, 'modal.registration.password_long')
    .matches(regEx.passwordValidationRegex, 'modal.registration.password_invalid')
    .notOneOf([Yup.ref('currentPassword')], 'modal.registration.password_must_differ')
    .required('modal.registration.required'),
  repeatNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'modal.registration.password_must_match')
    .required('modal.registration.required'),
});
