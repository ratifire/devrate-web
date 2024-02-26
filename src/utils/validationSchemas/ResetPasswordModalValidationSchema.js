import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const ResetPasswordModalValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    password: Yup.string()
      .min(6, t('inputs_errors.password_short'))
      .max(50, t('inputs_errors.password_long'))
      .required(t('inputs_errors.required')),
    repeat_password: Yup.string()
      .oneOf([Yup.ref('password'), null], t('inputs_errors.must_match'))
      .required(t('inputs_errors.required')),
  });
};
