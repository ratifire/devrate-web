import * as Yup from 'yup';
import i18n from 'i18next';

export const ResetPasswordSchema = () => {
  return Yup.object().shape({
    password: Yup.string()
      .min(6, i18n.t('modal.resetPassword.password_short'))
      .max(50, i18n.t('modal.resetPassword.password_long'))
      .required(i18n.t('modal.resetPassword.required')),
    repeat_password: Yup.string()
      .oneOf([Yup.ref('password'), null], i18n.t('modal.resetPassword.password_must_match'))
      .required(i18n.t('modal.resetPassword.required')),
  });
};
