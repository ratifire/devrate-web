import { useState } from 'react';
import { useFormik } from 'formik';
import { Trans, useTranslation } from 'react-i18next';
import { Box, Link, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useCreateUserMutation } from '@redux/api/slices/auth/authApiSlice';
import { RegistrationSchema } from '@utils/validationSchemas';
import { FormCheckbox, FormInput } from '@components/FormsComponents/Inputs';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import changeColorOfLastTitleWord from '@utils/helpers/changeColorOfLastTitleWord';
import { modalNames } from '@utils/constants/modalNames';
import { Link as RouterLink } from 'react-router';
import OAuthSection from '@components/ModalsComponents/AuthModals/OAuthSection';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice.js';
import styles from './RegistrationModal.styles';

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  agreement: false,
};

const RegistrationModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [createUser, { isLoading: isLoadingCreating }] = useCreateUserMutation();
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  const onSubmit = async (values, { resetForm, setErrors }) => {
    const { email, firstName, lastName, password } = values;
    try {
      await createUser({
        email,
        firstName,
        lastName,
        password,
      }).unwrap();

      resetForm();
      dispatch(closeModal());
      dispatch(openModal({ modalType: modalNames.confirmationModal, data: email }));
    } catch (error) {
      if (error.status === 409) setErrors({ email: t('modal.registration.exist_email') });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleOpenLoginModal = () => {
    dispatch(openModal({ modalType: modalNames.loginModal }));
  };
  const isFormValid =
    formik.values.email &&
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.password &&
    formik.values.repeatPassword &&
    formik.isValid &&
    formik.dirty;

  return (
    <>
      <Typography sx={styles.title} variant='h5'>
        {changeColorOfLastTitleWord(t('modal.registration.title'))}
      </Typography>
      <form autoComplete='off' className='landingForm' style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <Box sx={styles.scrollBox}>
          <FormInput
            autoComplete='off'
            error={formik.touched.email && Boolean(formik.errors.email)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            handleKeyDown={handleKeyDown}
            helperText={formik.touched.email && formik.errors.email}
            label='modal.registration.email'
            name='email'
            placeholder='example@example.com'
            type='email'
            value={formik.values.email}
          />
          <Box sx={styles.inputNameContainer}>
            <FormInput
              autoComplete='off'
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.firstName && formik.errors.firstName}
              label='modal.registration.first_name'
              name='firstName'
              type='text'
              value={formik.values.firstName}
            />
            <FormInput
              autoComplete='off'
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.lastName && formik.errors.lastName}
              label='modal.registration.last_name'
              name='lastName'
              value={formik.values.lastName}
            />
          </Box>
          <FormInput
            signupPassword
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
          <FormInput
            autoComplete='new-password'
            clickHandler={handleClickShowPassword}
            error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
            iconStyle={styles.iconStyle}
            label='modal.registration.password_repeat'
            mouseDownHandler={handleMouseDownPassword}
            name='repeatPassword'
            showPassword={showPassword}
            type='password'
            value={formik.values.repeatPassword}
          />
        </Box>
        <OAuthSection />
        <FormCheckbox
          isLink
          changeHandler={formik.handleChange}
          checked={formik.values.agreement}
          error={formik.touched.agreement && Boolean(formik.errors.agreement)}
          helperText={formik.touched.agreement && formik.errors.agreement}
          label={
            <Trans
              components={{
                a: <Link component={RouterLink} sx={styles.link} to='/' />,
              }}
              i18nKey='modal.registration.agreement'
            />
          }
          name='agreement'
        />
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            disabled={!isFormValid}
            label={t('modal.registration.btn_register')}
            loading={isLoadingCreating}
            sx={styles.submitBtn}
            type='submit'
            variant='contained'
            onClick={formik.handleSubmit}
          />
        </Box>
        <Box sx={styles.textWrapper}>
          <Typography sx={styles.text} variant='body'>
            {t('modal.registration.your_have_acc')}
          </Typography>
          <ButtonDef
            label={t('modal.registration.login')}
            sx={styles.textLink}
            type='button'
            variant='text'
            onClick={handleOpenLoginModal}
          />
        </Box>
      </form>
    </>
  );
};

export default RegistrationModal;
