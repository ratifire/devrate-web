import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { emailValidationSchema } from './EmailValidationSchema';

const phoneUtil = PhoneNumberUtil.getInstance();
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/;
const behanceRegex = /^https:\/\/www\.behance\.net\/[a-zA-Z0-9-]+\/?$/;
const telegramRegex = /^(https:\/\/t\.me\/[a-zA-Z0-9_]+\/?|@[a-zA-Z0-9_]+)$/;

export const StepContactsSchema = Yup.object().shape({
  telegram: Yup.string()
    .nullable()
    .notRequired()
    .matches(telegramRegex, 'profile.modal.userInfo.contact.validation.url'),
  linkedIn: Yup.string()
    .nullable()
    .notRequired()
    .matches(linkedinRegex, 'profile.modal.userInfo.contact.validation.url'),
  gitHub: Yup.string().nullable().notRequired().matches(githubRegex, 'profile.modal.userInfo.contact.validation.url'),
  behance: Yup.string().nullable().notRequired().matches(behanceRegex, 'profile.modal.userInfo.contact.validation.url'),
  mail: emailValidationSchema,
  phone: Yup.string()
    .nullable()
    .notRequired()
    .test('is-valid-phone', 'profile.modal.userInfo.contact.validation.phone', function (value) {
      if (!value || value.trim().length < 6 || value === '+') return true;
      const countryCode = this.parent.countryCode || 'UA';
      try {
        const phoneNumber = phoneUtil.parseAndKeepRawInput(value, countryCode.toUpperCase());
        return phoneUtil.isValidNumber(phoneNumber);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        return false;
      }
    }),
});
