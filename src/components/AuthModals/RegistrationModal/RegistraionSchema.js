import * as Yup from 'yup';
import i18n from 'i18next';

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('inputs_errors.email_invalid')).required(i18n.t('inputs_errors.required')),
  country: Yup.string().required(i18n.t('inputs_errors.required')),
  firstName: Yup.string()
    .min(2, i18n.t('inputs_errors.first_name_short'))
    .max(50, i18n.t('inputs_errors.first_name_long'))
    .required(i18n.t('inputs_errors.required')),
  lastName: Yup.string()
    .min(2, i18n.t('inputs_errors.last_name_short'))
    .max(50, i18n.t('inputs_errors.last_name_long'))
    .required(i18n.t('inputs_errors.required')),
  password: Yup.string()
    .min(6, i18n.t('inputs_errors.password_short'))
    .max(50, i18n.t('inputs_errors.password_long'))
    .required(i18n.t('inputs_errors.required')),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], i18n.t('inputs_errors.password_must_match'))
    .required(i18n.t('inputs_errors.required')),
});
