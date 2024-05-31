import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Link, Typography } from '@mui/material';
import ModalLayout from '../../../layouts/ModalLayout';

import styles from './LoginModal.styles';
import { LoginSchema } from './LoginSchema';
import { FormInput } from '../../Inputs';
import { ButtonDef } from '../../Buttons';

import { closeModal, openModal } from '../../../redux/modal/modalSlice';
import { useLoginMutation } from '../../../redux/auth/authApiSlice';
import { setCredentials } from '../../../redux/auth/authSlice';
import Cookies from 'js-cookie';

const initialValues = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openLogin = useSelector((state) => state.modal.openLogin);
  const navigate = useNavigate();

  const handleClose = () => dispatch(closeModal({ modalName: 'openLogin' }));
  const handleOpen = () => dispatch(openModal({ modalName: 'openCheckEmail' }));

  const [login, { isLoading }] = useLoginMutation();

  async function onSubmit(values, { resetForm }) {
    try {
      const userData = await login({ email: values.email, password: values.password }).unwrap();
      await dispatch(setCredentials({ data: userData, isAuthenticated: false }));
      const cookies = Cookies.get('JSESSIONID');
      if (cookies) {
        await dispatch(setCredentials({ data: userData, isAuthenticated: true }));
        navigate('/profile');
        resetForm();
        handleClose();
      }
    } catch (error) {
      if (!error?.originalStatus) {
        console.log('No server response');
      } else if (error.originalStatus === 400) {
        console.log('Missing Username or Password');
      } else if (error.originalStatus === 401) {
        console.log('Unauthorized');
      } else if (error.originalStatus === 500) {
        console.log('Login Failed');
      } else {
        console.log('Something went wrong');
      }
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return isLoading ? (
    <CircularProgress />
  ) : (
    <ModalLayout open={openLogin} setOpen={handleClose}>
      <Typography variant='subtitle2' sx={styles.title}>
        {t('modal.login.title')}
      </Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormInput
          name='email'
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label='modal.registration.email'
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
          label='modal.registration.password'
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
        />
        <Box sx={styles.textLink}>
          <ButtonDef
            variant='text'
            correctStyle={styles.turnBackLink}
            handlerClick={handleOpen}
            type='button'
            label='modal.login.forgot_your_password'
          />
        </Box>
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            variant='contained'
            type='submit'
            handlerClick={formik.handleSubmit}
            disabled={
              (formik.touched.email && Boolean(formik.errors.email)) ||
              (formik.touched.password && Boolean(formik.errors.password))
            }
            label='modal.login.btn_login'
          />
        </Box>

        <Typography href='#' variant='caption1' sx={styles.policyText}>
          {t('modal.login.text_privacy')}
        </Typography>

        <Box sx={styles.turnBackContainer}>
          <Typography href='#' variant='caption1' sx={styles.turnBackText}>
            {t('modal.login.return_on')}
          </Typography>
          <Link to={'/'} component={RouterLink} variant='caption1' sx={styles.turnBackLink} onClick={handleClose}>
            {t('modal.login.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default LoginModal;
