import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
const behanceRegex = /^https:\/\/www\.behance\.net\/[a-zA-Z0-9-]+\/?$/;
const telegramRegex = /^https:\/\/t\.me\/[a-zA-Z0-9_]+\/?$/;

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string().matches(telegramRegex, 'Please enter correct URL').optional(),
  linkedIn: Yup.string().matches(linkedinRegex, 'Please enter correct URL').optional(),
  gitHub: Yup.string().matches(githubRegex, 'Please enter correct URL').optional(),
  behance: Yup.string().matches(behanceRegex, 'Please enter correct URL').optional(),
  mail: emailValidationSchema,
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter correct phone number')
    .optional(),
});
