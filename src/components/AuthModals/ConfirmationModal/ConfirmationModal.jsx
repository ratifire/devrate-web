import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, FormControl, FormHelperText, Link, OutlinedInput, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { ButtonDef } from '../../Buttons';
import { ConfirmationSchema } from './ConfirmationSchema';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../../redux/modal/modalSlice';
import { useConfirmEmailMutation } from '../../../redux/auth/authApiSlice';
import styles from './ConfirmationModal.styles';

const initialValues = {
  text0: '',
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  text5: '',
};

const ConfirmationModal = () => {
  const { t } = useTranslation();
  const [codeError, setCodeError] = useState(false);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const [confirmEmail, result] = useConfirmEmailMutation();
  const openConfirmation = useSelector((state) => state.modal.openConfirmation);
  const handleClose = () => dispatch(closeModal({ modalName: 'openConfirmation' }));
  const handleCloseAllModal = () => {
    dispatch(closeModal({ modalName: 'openRegistration' }));
    dispatch(closeModal({ modalName: 'openConfirmation' }));
  };

  const onSubmit = async (values, { resetForm }) => {
    const code = Object.values(values).join('');
    console.log(resetForm({}));

    try {
      const { data } = await confirmEmail(code);
      if (data) {
        dispatch(closeModal({ modalName: 'openConfirmation' }));
        dispatch(openModal({ modalName: 'openLogin' }));
      }
      console.log('result.meta.response.status', result.meta.response.status);
    } catch (error) {
      if (error.originalStatus === 410) {
        setCodeError(true);
      }
    }

    inputRefs.current.forEach((ref) => {
      ref.value = '';
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ConfirmationSchema,
    onSubmit,
  });

  const handleChange = (event, index) => {
    const { value } = event.target;
    const nextIndex = index + 1;
    formik.setFieldValue(`text${index}`, value);

    if (value && nextIndex <= 5) {
      inputRefs.current[nextIndex].focus();
    }

    if (!value && index > 1) {
      inputRefs.current[index - 1].focus();
    }

    if (nextIndex === 6) {
      inputRefs.current[0].focus();
    }
  };

  // Определение состояния активности кнопки
  const isButtonActive = Object.values(formik.values).every(val => val !== '');

  // Визначення вмісту для FormHelperText
  const helperTextContent = Object.keys(formik.errors).some((key) => formik.touched[key]) ? 'Error Message' : null;

  return (
    <ModalLayout open={openConfirmation} setOpen={handleClose}>
      <Typography sx={styles.title}>{t('modal.confirmation.title')}</Typography>
      {codeError && (
        <Box sx={styles.codeErrorWrapper}>
          <CancelIcon sx={styles.codeErrorIcon} />
          <Typography sx={styles.codeErrorText}>{t('modal.confirmation.code_error_text')}</Typography>
        </Box>
      )}

      <Box sx={styles.mainTextWrapper}>
        <Typography sx={styles.mainText}>
          {t('modal.confirmation.main_text1')}{' '}
          <Typography component='span' sx={styles.userEmail}>
            user@mail.com
          </Typography>
          .
        </Typography>
        <Typography sx={styles.mainText}>{t('modal.confirmation.main_text2')}</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '25px' }}>
          {[...Array(6)].map((_, index) => (
            <FormControl
              key={index.toString()}
              variant='outlined'
              sx={styles.input}
              error={formik.touched[`text${index}`] && Boolean(formik.errors[`text${index}`])}
            >
              <OutlinedInput
                autoComplete='off'
                id={index.toString()}
                name={`text${index}`}
                value={formik.values[`text${index}`]}
                onChange={(event) => handleChange(event, index)}
                inputRef={(el) => (inputRefs.current[index] = el)}
                inputProps={{ maxLength: 1 }}
                autoFocus={index === 0}
                type='text'
              />
            </FormControl>
          ))}
        </Box>

        <FormHelperText sx={styles.textHelper}>{helperTextContent}</FormHelperText>

        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            variant='contained'
            handlerClick={formik.handleSubmit}
            label='modal.confirmation.btn_confirm'
            disabled={!isButtonActive}
          />
        </Box>
        <Box sx={styles.spamCheckContainer}>
          <Typography href='#' sx={styles.policyText}>
            {t('modal.confirmation.spam_check_text')}
          </Typography>
          <Typography href='#' sx={{ textAlign: 'center' }}>
            <Link to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
              {t('modal.confirmation.repeat_request_link')}
            </Link>
            <Typography component='span' href='#'>
              {' '}
              {t('modal.confirmation.repeat_request_text1')}
            </Typography>
          </Typography>
          <Typography href='#' sx={{ textAlign: 'center' }}>
            <Typography component='span' href='#'>
              {t('modal.confirmation.repeat_request_text2')}{' '}
            </Typography>
            <Link to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
              {t('modal.confirmation.change_email_link')}
            </Link>
          </Typography>
        </Box>
        <Box sx={styles.turnBackContainer}>
          <Typography href='#' sx={styles.turnBackText}>
            {t('modal.confirmation.return_on')}
          </Typography>
          <Link to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
            {t('modal.confirmation.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default ConfirmationModal;
