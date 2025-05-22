import { Box, Button, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import ConfirmCode from '@components/UI/ConfirmCode';
import { ConfirmationSchema } from '@utils/validationSchemas';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { useModalController } from '@utils/hooks/useModalController';
import { modalNames } from '@utils/constants/modalNames';
import { useActivateAccountMutation, useResendCodeMutation } from '@redux/api/slices/auth/authApiSlice';
import CancelIcon from '@mui/icons-material/Cancel';
import { setCredentials } from '@redux/slices/auth/authSlice';
import { setTokens } from '@redux/slices/auth/tokenSlice';
import { useNavigate } from 'react-router';
import { styles } from './ActivationModal.styles';

const ActivationModal = () => {
  const [isErrorAuth, setIsErrorAuth] = useState(false);
  const { t } = useTranslation();
  const { closeModal } = useModalController();
  const {
    data: { email, password },
  } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activateAccount, { isLoading, isError: isErrorActivateAccount }] = useActivateAccountMutation();
  const [resend, { isError: isErrorResend }] = useResendCodeMutation();

  const onSubmit = async (data) => {
    const activationCode = Object.values(data).join('');

    try {
      const { userData, idToken, authToken } = await activateAccount({ password, activationCode }).unwrap();

      if (idToken && authToken && userData) {
        dispatch(setCredentials({ data: userData }));
        dispatch(setTokens({ idToken, authToken }));
        navigate('/profile', { replace: true });
        closeModal();
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setIsErrorAuth(true);
    }
  };

  const inputRefs = useRef([]);
  const formik = useFormik({
    initialValues: {
      text0: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
    },
    validationSchema: ConfirmationSchema,
    onSubmit,
  });

  useEffect(() => {
    const allFieldsFilled = Object.keys(formik.values)
      .filter((key) => key.startsWith('text'))
      .every((key) => formik.values[key] !== '');

    if (allFieldsFilled) {
      formik.validateForm();
    }
  }, [formik.values]);

  const handleCancel = () => {
    closeModal(modalNames.activationModal);
  };

  const handleResend = async () => {
    await resend({ email }).unwrap();
  };

  const isDisabled = !formik.dirty || !formik.isValid || formik.isSubmitting || isLoading;
  const isErrorCode = isErrorResend || isErrorActivateAccount;

  return (
    <Box component='form' sx={styles.wrapper} onSubmit={formik.handleSubmit}>
      <Typography component='h6' variant='h6'>
        {t('modal.activation.title')}
      </Typography>
      <Typography component='p' variant='body'>
        {t('modal.activation.description')}{' '}
        <Box component='span' sx={styles.email}>
          {email}
        </Box>
      </Typography>
      <Box sx={styles.codeBox}>
        <ConfirmCode formik={formik} helperTextContent={isErrorCode} inputRefs={inputRefs} />
        {isErrorAuth && (
          <Typography sx={styles.error}>
            <CancelIcon sx={styles.codeErrorIcon} />
            {t('modal.activation.errors.server_error')}
          </Typography>
        )}
        {isErrorCode && (
          <Typography sx={styles.error}>
            <CancelIcon sx={styles.codeErrorIcon} />
            {t('modal.activation.errors.code_error_text')}
          </Typography>
        )}
      </Box>
      <Box sx={styles.box}>
        <Typography>{t('modal.activation.subtitle')}</Typography>
        <Box>
          <Trans
            components={{
              button: <Button sx={styles.btnResend} type='button' onClick={handleResend} />,
            }}
            i18nKey={'modal.activation.resend'}
          />
        </Box>
      </Box>
      <Box sx={styles.btnBox}>
        <ButtonDef
          disabled={isDisabled}
          label={t('settings.general.common.send')}
          type={'submit'}
          variant='contained'
        />
        <ButtonDef
          label={t('settings.general.common.cancel')}
          type='button'
          variant={'outlined'}
          onClick={handleCancel}
        />
      </Box>
    </Box>
  );
};

export default ActivationModal;
