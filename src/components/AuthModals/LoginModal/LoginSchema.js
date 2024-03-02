import * as Yup from 'yup';
import i18n from 'i18next';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('modal.login.email_invalid')).required(i18n.t('modal.login.required')),
  password: Yup.string()
    .min(6, i18n.t('modal.login.password_short'))
    .max(50, i18n.t('modal.login.password_long'))
    .required(i18n.t('modal.login.required')),
});
