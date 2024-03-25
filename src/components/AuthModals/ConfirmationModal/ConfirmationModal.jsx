import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, FormControl, FormHelperText, Link, OutlinedInput, Typography } from '@mui/material';
import styles from './ConfirmationModal.styles';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { ButtonDef } from '../../Buttons';
import { ConfirmationSchema } from './ConfirmationSchema';
import { Link as RouterLink } from 'react-router-dom';

const initialValues = {};

const ConfirmationModal = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const [codeError] = useState(true);
  const inputRefs = useRef([]);
  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm({});
    inputRefs.current.forEach((ref) => {
      ref.value = ''; // Очищення рефа
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

  return (
    <ModalLayout open={open} setOpen={setOpen}>
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
                id={index}
                name={`text${index}`}
                value={formik.values[`text${index}`]}
                onChange={(event) => handleChange(event, index)}
                inputRef={(el) => (inputRefs.current[index] = el)}
                type='text'
              />
              {
                <FormHelperText id={index} sx={styles.textHelper}>
                  {formik.touched[`text${index}`] && Boolean(formik.errors[`text${index}`])}
                </FormHelperText>
              }
            </FormControl>
          ))}
        </Box>

        <Box sx={styles.wrapperBtn}>
          <ButtonDef variant='contained' handlerClick={formik.handleSubmit} label='modal.confirmation.btn_confirm' />
        </Box>
        <Box sx={styles.spamCheckContainer()}>
          <Typography href='#' sx={styles.policyText}>
            {t('modal.confirmation.spam_check_text')}
          </Typography>
          <Typography href='#' sx={{ textAlign: 'center' }}>
            <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
              {t('modal.confirmation.repeat_request_link')}
            </Link>
            <Typography component='span' hr ef='#'>
              {' '}
              {t('modal.confirmation.repeat_request_text1')}
            </Typography>
          </Typography>
          <Typography href='#' sx={{ textAlign: 'center' }}>
            <Typography component='span' href='#'>
              {t('modal.confirmation.repeat_request_text2')}{' '}
            </Typography>
            <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
              {t('modal.confirmation.change_email_link')}
            </Link>
          </Typography>
        </Box>
        <Box sx={styles.turnBackContainer}>
          <Typography href='#' sx={styles.turnBackText}>
            {t('modal.confirmation.return_on')}
          </Typography>
          <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
            {t('modal.confirmation.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ConfirmationModal;
