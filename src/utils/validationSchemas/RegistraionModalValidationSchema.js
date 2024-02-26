import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const RegistrationModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string().email(t('inputs_errors.email_invalid')).required(t('inputs_errors.required')),
    country: Yup.string().required(t('inputs_errors.required')),
    firstName: Yup.string()
      .min(2, t('inputs_errors.first_name_short'))
      .max(50, t('inputs_errors.first_name_long'))
      .required(t('inputs_errors.required')),
    lastName: Yup.string()
      .min(2, t('inputs_errors.last_name_short'))
      .max(50, t('inputs_errors.last_name_long'))
      .required(t('inputs_errors.required')),
    password: Yup.string()
      .min(6, t('inputs_errors.password_short'))
      .max(50, t('inputs_errors.password_long'))
      .required(t('inputs_errors.required')),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('inputs_errors.password_must_match'))
      .required(t('inputs_errors.required')),
  });
};
