import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const CheckEmailResetPasswordModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string().email(t('inputs_errors.email_invalid')).required(t('inputs_errors.required')),
  });
};
