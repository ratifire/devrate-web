import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const useResetPasswordSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    code: Yup.array()
      .of(
        Yup.string()
          .required(`${t('modal.resetPassword.code_required')}`)
          .length(1, `${t('modal.resetPassword.code_symbol_min')}`)
      )
      .length(6, `${t('modal.resetPassword.code_length_max')}`),
    newPassword: Yup.string()
      .required(`${t('modal.resetPassword.required')}`)
      .min(7, `${t('modal.resetPassword.password_short')}`)
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/,
        `${t('modal.resetPassword.not_valid')}`
      ),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], `${t('modal.resetPassword.password_must_match')}`)
      .required(`${t('modal.resetPassword.required')}`),
  });
};

export default useResetPasswordSchema;
