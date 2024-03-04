import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, Button, Link, Typography } from '@mui/material';
import styles from '../LoginModal/LoginModal.styles';
import { LoginSchema } from './LoginSchema';
import PropTypes from 'prop-types';
import FormInput from '../../Inputs/FormInput';

const initialValues = {
  email: '',
  password: '',
};
const LoginModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.login.title')}</Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormInput
          name='email'
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label={t('modal.registration.email')}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <FormInput
          showPassword={showPassword}
          type='password'
          name='password'
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={t('modal.registration.password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
        />
        <Box sx={styles.textLink}>
          <Link href='#' sx={styles.link}>
            {t('modal.login.forgot_your_password')}
          </Link>
        </Box>
        <Button type='submit' sx={styles.btn}>
          {t('modal.login.btn_login').toUpperCase()}
        </Button>
        <Typography href='#' sx={styles.policyText}>
          {t('modal.login.text_privacy')}
        </Typography>
        <Box sx={styles.turnBackContainer}>
          <Typography href='#' sx={styles.turnBackText}>
            {t('modal.login.return_on')}
          </Typography>
          <Link href='#' sx={styles.turnBackLink}>
            {t('modal.login.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default LoginModal;
