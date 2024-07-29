import React, { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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
  const [loginError, setLoginError] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openLogin = useSelector((state) => state.modal.openLogin);
  const navigate = useNavigate();

  const handleOpen = useCallback(() => {
    dispatch(openModal({ modalName: 'openCheckEmail' }));
    dispatch(closeModal({ modalName: 'openLogin' }));
  }, [dispatch]);

  const [login] = useLoginMutation();

  const onSubmit = useCallback(async (values, { setSubmitting }) => {
    console.log('onSubmit called');
    setLoginError(null);
    try {
      const userData = await login({ email: values.email, password: values.password }).unwrap();
      console.log('Login successful', userData);
      await dispatch(setCredentials({ data: userData, isAuthenticated: false }));
      const cookies = Cookies.get('JSESSIONID');
      if (cookies) {
        await dispatch(setCredentials({ data: userData, isAuthenticated: true }));
        navigate('/profile', { replace: true });
      }
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Something went wrong';
      if (!error?.originalStatus) {
        errorMessage = 'Invalid email or password';
      } else if (error.originalStatus === 400) {
        errorMessage = 'Missing Username or Password';
      } else if (error.originalStatus === 401) {
        errorMessage = 'Unauthorized';
      } else if (error.originalStatus === 500) {
        errorMessage = 'Login Failed';
      }
      setLoginError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  }, [login, dispatch, navigate]);

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), []);
  const handleMouseDownPassword = useCallback((event) => event.preventDefault(), []);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault(); 
    formik.handleSubmit(); 
  }, [formik]);

  console.log('Render LoginModal', { isSubmitting: formik.isSubmitting, isValid: formik.isValid });

  return (
    <ModalLayout open={openLogin} setOpen={() => {}}>
      <Typography variant='subtitle2' sx={styles.title}>
        {t('modal.login.title')}
      </Typography>
      <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
        {loginError && (
          <Box sx={styles.errorWrapper}>
            <HighlightOffIcon sx={{ marginRight: 1 }} />
          <Typography variant="body2" sx={styles.error}>
            {loginError}
          </Typography>
          </Box>
        )}
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
          iconStyle={styles.iconStyle}
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
            disabled={formik.isSubmitting || !formik.isValid}
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
          <Link to={'/'} component={RouterLink} variant='caption1' sx={styles.turnBackLink}>
            {t('modal.login.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default LoginModal;
