import { Box, Button, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import ConfirmCode from '@components/UI/ConfirmCode';
import { ConfirmationSchema } from '@utils/validationSchemas';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { styles } from './ActivationModal.styles';

const ActivationModal = () => {
  const { t } = useTranslation();
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
  });

  useEffect(() => {
    const allFieldsFilled = Object.keys(formik.values)
      .filter((key) => key.startsWith('text'))
      .every((key) => formik.values[key] !== '');

    if (allFieldsFilled) {
      formik.validateForm();
    }
  }, [formik.values]);

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' variant='h6'>
        {t('modal.activation.title')}
      </Typography>
      <Typography component='p' variant='body'>
        {t('modal.activation.description')}{' '}
        <Box component='span' sx={styles.email}>
          user@mail.com.
        </Box>
      </Typography>
      <ConfirmCode formik={formik} inputRefs={inputRefs} />
      <Box sx={styles.box}>
        <Typography>{t('modal.activation.subtitle')}</Typography>
        <Typography>
          <Trans
            components={{
              button: <Button disableRipple sx={styles.btnResend} />,
            }}
            i18nKey={'modal.activation.resend'}
          />
        </Typography>
      </Box>
      <Box sx={styles.btnBox}>
        <ButtonDef label={t('settings.general.common.send')} variant='contained' />
        <ButtonDef label={t('settings.general.common.cancel')} variant={'outlined'} />
      </Box>
    </Box>
  );
};

export default ActivationModal;
