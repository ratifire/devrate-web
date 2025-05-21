import { Box, Button, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import ConfirmCode from '@components/UI/ConfirmCode';
import { ConfirmationSchema } from '@utils/validationSchemas';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useSelector } from 'react-redux';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { useActivateAccountMutation, useLoginMutation } from '@redux/api/slices/auth/authApiSlice';
import CancelIcon from '@mui/icons-material/Cancel';
import { styles } from './ActivationModal.styles';

const ActivationModal = () => {
  const { t } = useTranslation();
  const { closeModal } = useModalController();
  const {
    data: { email, password },
  } = useSelector((state) => state.modal);
  const [activateAccount, { isLoading, isError: isErrorActivateAccount }] = useActivateAccountMutation();
  const [resend, { isError: isErrorResend }] = useLoginMutation();

  const onSubmit = async (data) => {
    const confirmationCode = Object.values(data).join('');

    await activateAccount({ password, confirmationCode });
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
    await resend({ email, password }).unwrap();
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
