import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { closeModal, openModal } from '../../../redux/modal/modalSlice';
import { useConfirmEmailMutation } from '../../../redux/auth/authApiSlice';
import { useFormik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import ConfirmationForm from './ConfirmationForm';
import { ConfirmationSchema } from './ConfirmationSchema';
import styles from './ConfirmationModal.styles';




const ConfirmationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [codeError, setCodeError] = useState(false);
  const [confirmEmail] = useConfirmEmailMutation();
  const openConfirmation = useSelector((state) => state.modal.openConfirmation);
  const handleClose = () => dispatch(closeModal({ modalName: 'openConfirmation' }));
  const handleCloseAllModal = () => {
    dispatch(closeModal({ modalName: 'openRegistration' }));
    dispatch(closeModal({ modalName: 'openConfirmation' }));
  };

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
    onSubmit: async (values, { resetForm }) => {
      const code = Object.values(values).join('');

      try {
        const { data } = await confirmEmail(code);
        if (data) {
          dispatch(closeModal({ modalName: 'openConfirmation' }));
          dispatch(openModal({ modalName: 'openLogin' }));
        }
      } catch (error) {
        if (error.originalStatus === 410) {
          setCodeError(true);
        }
      }

      resetForm();

      inputRefs.current.forEach((ref) => {
        ref.value = '';
      });
    },
  });

  return (
    <ModalLayout open={openConfirmation} setOpen={handleClose}>
      <Typography sx={styles.title}>{t('modal.confirmation.title')}</Typography>
      {codeError && (
        <Box>
          <CancelIcon sx={styles.codeErrorIcon}/>
          <Typography sx={styles.codeErrorText}>{t('modal.confirmation.code_error_text')}</Typography>
        </Box>
      )}

      <Box sx={styles.mainTextWrapper}>
        <Typography sx={styles.mainText}>
          {t('modal.confirmation.main_text1')} <Typography component='span' sx={styles.userEmail}>user@mail.com</Typography>.
        </Typography>
        <Typography sx={styles.mainText}>{t('modal.confirmation.main_text2')}</Typography>
      </Box>

      <ConfirmationForm
        formik={formik}
        handleCloseAllModal={handleCloseAllModal}
        inputRefs={inputRefs}
        handleKeyDown={() => {}}
        isButtonActive={false}
        helperTextContent=""
      />

<Box sx={styles.spamCheckContainer}>
          <Typography sx={styles.mainText}>{t('modal.confirmation.spam_check_text')}</Typography>
          <Typography sx={{ textAlign: 'center' }}>
            <RouterLink sx={styles.link} to={'/'} onClick={handleCloseAllModal}>{t('modal.confirmation.repeat_request_link')}
            </RouterLink>
            <Typography>{t('modal.confirmation.repeat_request_text1')}</Typography>
          </Typography>
          <Typography >
            <Typography sx={styles.turnBackText}>{t('modal.confirmation.repeat_request_text2')}</Typography>
            <RouterLink to={'/'} sx={styles.link} onClick={handleCloseAllModal}>{t('modal.confirmation.change_email_link')}</RouterLink>
          </Typography>
</Box>
        <Box sx={styles.turnBackContainer}>
          <Typography sx={styles.turnBackText}>{t('modal.confirmation.return_on')}</Typography>
          <RouterLink to={'/'} sx={styles.link} onClick={handleCloseAllModal}>{t('modal.confirmation.home_page')}</RouterLink>
        </Box>
    </ModalLayout>
  );
};

export default ConfirmationModal;
