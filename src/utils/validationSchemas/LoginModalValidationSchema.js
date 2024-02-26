import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const LoginModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string().email(t('inputs_errors.email_invalid')).required(t('inputs_errors.required')),
    password: Yup.string()
      .min(6, t('inputs_errors.password_short'))
      .max(50, t('inputs_errors.password_long'))
      .required(t('inputs_errors.required')),
  });
};
