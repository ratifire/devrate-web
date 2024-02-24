import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const LoginModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string().email(t('modal.invalid_email')).required(t('modal.required')),
    password: Yup.string()
      .min(6, t('modal.password_long'))
      .max(50, t('modal.password_long'))
      .required(t('modal.required')),
  });
};
