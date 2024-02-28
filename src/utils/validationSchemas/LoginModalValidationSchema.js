import * as Yup from 'yup';
import i18n from 'i18next';

export const LoginModalValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email(i18n.t('inputs_errors.email_invalid')).required(i18n.t('inputs_errors.required')),
    password: Yup.string()
      .min(6, i18n.t('inputs_errors.password_short'))
      .max(50, i18n.t('inputs_errors.password_long'))
      .required(i18n.t('inputs_errors.required')),
  });
};
