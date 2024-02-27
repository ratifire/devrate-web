import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import styles from './CheckEmailResetPasswordModal.styles';

import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import { Box, Button, Link, Typography } from '@mui/material';
import { CheckEmailResetPasswordModalValidationSchema } from '../../../utils/validationSchemas/CheckEmailResetPasswordModalValidationSchema';
import InputText from '../../Inputs';
import PropTypes from 'prop-types';

const CheckEmailResetPasswordModal = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const initialValues = {
    email: '',
  };
  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: CheckEmailResetPasswordModalValidationSchema,
    onSubmit,
  });
  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.send_letter_title')}</Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <InputText
          id={'email'}
          name={'email'}
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type={'email'}
          label={t('inputs.email')}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <Button type='submit' sx={styles.btn}>
          {t('buttons.btn_send_letter')}
        </Button>
      </form>
      <Box sx={styles.box}>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.privacy_policy')}
        </Link>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.terms_and_conditions')}
        </Link>
      </Box>
      <Typography sx={styles.textLink}>
        {t('modal.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

CheckEmailResetPasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CheckEmailResetPasswordModal;
