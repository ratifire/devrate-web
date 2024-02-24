import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const CheckEmailResetPasswordModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string().email(t('modal.invalid_email')).required(t('modal.required')),
  });
};
