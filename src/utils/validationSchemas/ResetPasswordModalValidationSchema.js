import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const ResetPasswordModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    password: Yup.string()
      .min(6, t('modal.password_short'))
      .max(50, t('modal.password_long'))
      .required(t('modal.required')),
    repeat_password: Yup.string()
      .min(6, t('modal.password_short'))
      .max(50, t('modal.password_long'))
      .oneOf([Yup.ref('password'), null], t('modal.must_match'))
      .required(t('modal.required')),
  });
};
