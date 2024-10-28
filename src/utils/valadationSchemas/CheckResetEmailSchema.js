import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

export const CheckResetEmailSchema = Yup.object().shape({
  email: emailValidationSchema,
});
