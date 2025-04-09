import * as Yup from 'yup';
import regEx from '../constants/regularExpressions';
import { emailValidationSchema } from './EmailValidationSchema';

export const RegistrationSchema = Yup.object().shape({
  email: emailValidationSchema,
  country: Yup.string()
    .transform((value, originalValue) => {
      if (typeof originalValue === 'object' && originalValue?.target?.value) {
        return originalValue.target.value;
      }
      return value;
    })
    .required('modal.registration.required'),
  firstName: Yup.string()
    .min(2, 'modal.registration.first_name_short')
    .max(50, 'modal.registration.first_name_long')
    .matches(/^[\p{L}\s\-'’]+$/u, 'modal.registration.first_name_invalid_characters')
    .required('modal.registration.required'),
  lastName: Yup.string()
    .min(2, 'modal.registration.last_name_short')
    .max(50, 'modal.registration.last_name_long')
    .matches(/^[\p{L}\s\-'’]+$/u, 'modal.registration.last_name_invalid_characters')
    .required('modal.registration.required'),
  password: Yup.string()
    .min(8, 'modal.registration.password_short')
    .max(50, 'modal.registration.password_long')
    .matches(regEx.passwordValidationRegex, 'modal.registration.password_invalid')
    .required('modal.registration.required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'modal.registration.password_must_match')
    .required('modal.registration.required'),
  agreement: Yup.boolean()
    .oneOf([true], 'modal.registration.agreement_error')
    .required('modal.registration.agreement_error'),
});
