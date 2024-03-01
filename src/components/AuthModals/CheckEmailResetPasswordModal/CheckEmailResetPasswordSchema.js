import * as Yup from 'yup';
import i18n from 'i18next';

export const CheckEmailResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('inputs_errors.email_invalid')).required(i18n.t('inputs_errors.required')),
});
