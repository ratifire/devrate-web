import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayout from '../../../../layouts/ModalLayout';
import { Box, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import { useConfirmEmailMutation } from '../../../../redux/auth/authApiSlice';
import { useFormik } from 'formik';
import ConfirmationForm from './ConfirmationForm';
import { ConfirmationSchema } from '../../../../utils/valadationSchemas/index';
import styles from './ConfirmationModal.styles';
import StyledRouterLink from './StyledRouterLink';

const ConfirmationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [codeError, setCodeError] = useState(false);
  const [confirmEmail] = useConfirmEmailMutation();
  const openConfirmation = useSelector((state) => state.modal.openConfirmation);
  const email = useSelector((state) => state.modal.modalData);
  const handleClose = () => {
    dispatch(closeModal({ modalName: 'openConfirmation' }));
  };

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
          handleClose();
          setTimeout(() => {
            dispatch(openModal({ modalName: 'openLogin' }));
          }, 100);
        }
      } catch (error) {
        if (error.originalStatus === 410) {
          setCodeError(true);
        }
      }

      resetForm();

      inputRefs.current.forEach((ref) => {
        if (ref) ref.value = '';
      });
    },
  });

  const handleCodeChange = (code) => {
    for (let i = 0; i < 6; i++) {
      formik.setFieldValue(`text${i}`, code[i] || '');
    }
  };

  return (
    <ModalLayout open={openConfirmation} setOpen={handleClose}>
      <Typography variant='subtitle2' sx={styles.title}>
        {t('modal.confirmation.title')}
      </Typography>
      {codeError && (
        <Box>
          <CancelIcon sx={styles.codeErrorIcon} />
          <Typography variant='subtitle2' sx={styles.codeErrorText}>
            {t('modal.confirmation.code_error_text')}
          </Typography>
        </Box>
      )}

      <Box sx={styles.mainTextWrapper}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text1')}{' '}
          <Typography variant='subtitle3' component='span' sx={styles.userEmail}>
            {email && email.replace(/(?<=.{1}).(?=[^@]*?.@)/g, '*')}
          </Typography>
          .
        </Typography>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text2')}
        </Typography>
      </Box>

      <ConfirmationForm
        formik={formik}
        inputRefs={inputRefs}
        helperTextContent=''
        buttonLabel='modal.confirmation.btn_confirm'
        handleCodeChange={handleCodeChange}
      />

      <Box variant='subtitle3' sx={styles.spamCheckContainer}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.spam_check_text')}
        </Typography>
        <Typography sx={{ textAlign: 'center' }}>
          <StyledRouterLink to={'/'} onClick={handleCloseAllModal}>
            {t('modal.confirmation.repeat_request_link')}
          </StyledRouterLink>
          <Typography variant='subtitle3'> {t('modal.confirmation.repeat_request_text1')}</Typography>
        </Typography>
        <Typography>
          <Typography variant='subtitle3' sx={styles.turnBackText}>
            {t('modal.confirmation.repeat_request_text2')}
          </Typography>
          <StyledRouterLink to={'/'} onClick={handleCloseAllModal}>
            {t('modal.confirmation.change_email_link')}
          </StyledRouterLink>
        </Typography>
      </Box>

      <Box sx={styles.turnBackContainer}>
        <Typography variant='subtitle3' sx={styles.turnBackText}>
          {t('modal.confirmation.return_on')}
        </Typography>
        <StyledRouterLink to={'/'} onClick={handleCloseAllModal}>
          {t('modal.confirmation.home_page')}
        </StyledRouterLink>
      </Box>
    </ModalLayout>
  );
};

export default ConfirmationModal;
