import * as Yup from 'yup';
import i18n from 'i18next';

console.log(i18n.t('modal.registration.email_invalid'));
export const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('modal.registration.email_invalid')).required(i18n.t('modal.registration.required')),
  country: Yup.string().required(i18n.t('modal.registration.required')),
  firstName: Yup.string()
    .min(2, i18n.t('modal.registration.first_name_short'))
    .max(50, i18n.t('modal.registration.first_name_long'))
    .required(i18n.t('modal.registration.required')),
  lastName: Yup.string()
    .min(2, i18n.t('modal.registration.last_name_short'))
    .max(50, i18n.t('modal.registration.last_name_long'))
    .required(i18n.t('modal.registration.required')),
  password: Yup.string()
    .min(6, i18n.t('modal.registration.password_short'))
    .max(50, i18n.t('modal.registration.password_long'))
    .required(i18n.t('modal.registration.required')),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], i18n.t('modal.registration.password_must_match'))
    .required(i18n.t('modal.registration.required')),
});
