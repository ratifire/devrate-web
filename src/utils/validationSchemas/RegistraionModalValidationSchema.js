import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const RegistrationModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    email: Yup.string().email(t('modal.invalid_email')).required(t('modal.required')),
    country: Yup.string().required(t('modal.required')),
    firstName: Yup.string()
      .min(2, t('modal.firstName_short'))
      .max(50, t('modal.firstName_long'))
      .required(t('modal.required')),
    lastName: Yup.string()
      .min(2, t('modal.lastName_short'))
      .max(50, t('modal.lastName_long'))
      .required(t('modal.required')),
    password: Yup.string()
      .min(6, t('modal.password_long'))
      .max(50, t('modal.password_long'))
      .required(t('modal.required')),
    repeatPassword: Yup.string()
      .min(6, t('modal.password_long'))
      .max(50, t('modal.password_long'))
      .oneOf([Yup.ref('password'), null], t('modal.must_match'))
      .required(t('modal.required')),
  });
};
