import React, { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import ModalLayout from '../../../../layouts/ModalLayout';
import styles from './LoginModal.styles';
import { LoginSchema } from '../../../../utils/valadationSchemas/index';
import { FormInput } from '../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import { useLoginMutation } from '../../../../redux/auth/authApiSlice';
import { setCredentials } from '../../../../redux/auth/authSlice';
import Cookies from 'js-cookie';
import changeColorOfLastTitleWord from '../../../../utils/helpers/changeColorOfLastTitleWord';
import CancelIcon from '@mui/icons-material/Cancel';

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

  const handleClose = useCallback(() => {
    dispatch(closeModal({ modalName: 'openLogin' }));
  }, [dispatch]);

  const [login] = useLoginMutation();

  const onSubmit = useCallback(
    async (values, { setSubmitting }) => {
      setLoginError(null);
      try {
        const userData = await login({ email: values.email, password: values.password }).unwrap();
        await dispatch(setCredentials({ data: userData, isAuthenticated: false }));
        const cookies = Cookies.get('JSESSIONID');
        if (cookies) {
          await dispatch(setCredentials({ data: userData, isAuthenticated: true }));
          navigate('/profile', { replace: true });
        }
        handleClose();
      } catch (error) {
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
    },
    [login, dispatch, navigate]
  );

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  const handleClickShowPassword = useCallback(() => setShowPassword((show) => !show), []);
  const handleMouseDownPassword = useCallback((event) => event.preventDefault(), []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      formik.handleSubmit();
    },
    [formik]
  );

  return (
    <ModalLayout open={openLogin} setOpen={handleClose}>
      <Typography variant='h5' sx={styles.title}>
        {changeColorOfLastTitleWord(t('modal.login.title'))}
      </Typography>
      <Typography variant='subtitle2' sx={styles.subtitle}>
        {t('modal.login.subtitle')}
      </Typography>
      <form className='landingForm' onSubmit={handleFormSubmit} style={{ width: '100%' }}>
        <FormInput
          name='email'
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label='modal.registration.email'
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          autoComplete='email'
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
          autoComplete='new-password'
        />

        {loginError && (
          <Box sx={styles.codeErrorWrapper}>
            <CancelIcon sx={styles.codeErrorIcon} />
            <Typography variant='subtitle2' sx={styles.codeErrorText}>
              {loginError}
            </Typography>
          </Box>
        )}

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
            disabled={formik.isSubmitting || !formik.isValid || !formik.values.email || !formik.values.password}
            label='modal.login.btn_login'
            correctStyle={styles.submitBtn}
          />
        </Box>
        <Box sx={styles.policyLinkBox}>
          <Typography variant='caption1' sx={styles.policyText}>
            {t('modal.login.text_privacy')}
          </Typography>
          <Box>
            <Link
              sx={styles.policyLink}
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                navigate('/privacy_policy');
              }}
            >
              {t('modal.login.text_privacy_policy')}
            </Link>{' '}
            &{' '}
            <Link
              sx={styles.policyLink}
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                navigate('/terms_and_conditions');
              }}
            >
              {t('modal.login.text_privacy_terms')}
            </Link>
          </Box>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default LoginModal;
