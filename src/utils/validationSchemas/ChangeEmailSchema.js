import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

export const ChangeEmailSchema = Yup.object().shape({
  currentEmail: emailValidationSchema,
  newEmail: emailValidationSchema.test(
    'not-same-as-current',
    'settings.general.changeEmail.newEmailError.different',
    (value, context) => value !== context.parent.currentEmail
  ),
});
