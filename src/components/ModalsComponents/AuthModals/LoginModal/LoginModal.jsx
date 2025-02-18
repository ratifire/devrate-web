import { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Box, Link, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { setCredentials } from '@redux/slices/auth/authSlice.js';
import { setTokens } from '@redux/slices/auth/tokenSlice.js';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice';
import { useLoginMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { LoginSchema } from '../../../../utils/validationSchemas';
import { FormInput } from '../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import changeColorOfLastTitleWord from '../../../../utils/helpers/changeColorOfLastTitleWord.jsx';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import styles from './LoginModal.styles';

const initialValues = {
  email: '',
  password: '',
};

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = useCallback(() => {
    dispatch(openModal({ modalType: modalNames.checkEmailModal }));
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const [login] = useLoginMutation();

  const onSubmit = useCallback(
    async (values, { setSubmitting }) => {
      setLoginError(null);
      try {
        const { userData, idToken, authToken } = await login({
          email: values.email,
          password: values.password,
        }).unwrap();
        dispatch(setCredentials({ data: userData }));

        if (idToken && authToken) {
          dispatch(setTokens({ idToken, authToken }));
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
    <>
      <Typography sx={styles.title} variant='h5'>
        {changeColorOfLastTitleWord(t('modal.login.title'))}
      </Typography>
      <Typography sx={styles.subtitle} variant='subtitle2'>
        {t('modal.login.subtitle')}
      </Typography>
      <form className='landingForm' style={{ width: '100%' }} onSubmit={handleFormSubmit}>
        <FormInput
          autoComplete='email'
          error={formik.touched.email && Boolean(formik.errors.email)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperText={formik.touched.email && formik.errors.email}
          label='modal.registration.email'
          name='email'
          type='email'
          value={formik.values.email}
        />
        <FormInput
          autoComplete='new-password'
          clickHandler={handleClickShowPassword}
          error={formik.touched.password && Boolean(formik.errors.password)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperText={formik.touched.password && formik.errors.password}
          iconStyle={styles.iconStyle}
          label='modal.registration.password'
          mouseDownHandler={handleMouseDownPassword}
          name='password'
          showPassword={showPassword}
          type='password'
          value={formik.values.password}
        />

        {loginError && (
          <Box sx={styles.codeErrorWrapper}>
            <CancelIcon sx={styles.codeErrorIcon} />
            <Typography sx={styles.codeErrorText} variant='subtitle2'>
              {loginError}
            </Typography>
          </Box>
        )}

        <Box sx={styles.textLink}>
          <ButtonDef
            label={t('modal.login.forgot_your_password')}
            loading={formik.isSubmitting}
            sx={styles.turnBackLink}
            type='button'
            variant='text'
            onClick={handleOpen}
          />
        </Box>
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            disabled={formik.isSubmitting || !formik.isValid || !formik.values.email || !formik.values.password}
            label={t('modal.login.btn_login')}
            loading={formik.isSubmitting}
            sx={styles.submitBtn}
            type='submit'
            variant='contained'
          />
        </Box>
        <Box sx={styles.policyLinkBox}>
          <Typography sx={styles.policyText} variant='caption1'>
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
    </>
  );
};

export default LoginModal;
