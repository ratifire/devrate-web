import * as Yup from 'yup';
import { emailValidationSchema } from './EmailValidationSchema';

const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
const behanceRegex = /^https:\/\/www\.behance\.net\/[a-zA-Z0-9-]+\/?$/;
const telegramRegex = /^https:\/\/t\.me\/[a-zA-Z0-9_]+\/?$/;

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string().matches(telegramRegex, 'profile.modal.userInfo.contact.validation.url').optional(),
  linkedIn: Yup.string().matches(linkedinRegex, 'profile.modal.userInfo.contact.validation.url').optional(),
  gitHub: Yup.string().matches(githubRegex, 'profile.modal.userInfo.contact.validation.url').optional(),
  behance: Yup.string().matches(behanceRegex, 'profile.modal.userInfo.contact.validation.url').optional(),
  mail: emailValidationSchema,
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'profile.modal.userInfo.contact.validation.phone')
    .optional(),
});
