import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
const behanceRegex = /^https:\/\/www\.behance\.net\/[a-zA-Z0-9-]+\/?$/;
const telegramRegex = /^https:\/\/t\.me\/[a-zA-Z0-9_]+\/?$/;

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string().matches(telegramRegex, 'please type correct URL, username').optional(),
  linkedIn: Yup.string().matches(linkedinRegex, 'please type correct URL').optional(),
  gitHub: Yup.string().matches(githubRegex, 'please type correct URL').optional(),
  behance: Yup.string().matches(behanceRegex, 'please type correct URL').optional(),
  mail: emailValidationSchema,
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'please type correct Phone number')
    .optional(),
});
