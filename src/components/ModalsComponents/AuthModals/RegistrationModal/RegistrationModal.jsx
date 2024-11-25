import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../../layouts/ModalLayout';
import { Box, CircularProgress, Link, Typography } from '@mui/material';
import styles from './RegistrationModal.styles';
import { RegistrationSchema } from '../../../../utils/valadationSchemas/index';
import { AdvancedFormSelector, FormCheckbox, FormInput } from '../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useCreateUserMutation } from '../../../../redux/auth/authApiSlice';
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import { useGetCountryListQuery } from '../../../../redux/countryList/countryApiSlice';
import changeColorOfLastTitleWord from '../../../../utils/helpers/changeColorOfLastTitleWord';

const initialValues = {
  email: '',
  country: '',
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
  news: false,
  agreement: false,
};

const RegistrationModal = () => {
  const [country, setCountry] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [createUser, { isLoading: isCreating }] = useCreateUserMutation();
  const openRegistration = useSelector((state) => state.modal.openRegistration);
  const handleClose = () => dispatch(closeModal({ modalName: 'openRegistration' }));
  const { data: userCountries } = useGetCountryListQuery();

  const handleChangeCountry = (value) => {
    setCountry(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    formik.setFieldValue('country', country);
  }, [country]);

  const onSubmit = async (values, { resetForm, setErrors }) => {
    const { email, firstName, lastName, country, news, password } = values;
    try {
      await createUser({
        email,
        firstName,
        lastName,
        country,
        subscribed: news,
        password,
      }).unwrap();

      resetForm();
      dispatch(closeModal({ modalName: 'openRegistration' }));
      dispatch(openModal({ modalName: 'openConfirmation', data: email }));
    } catch (error) {
      if (error.status === 409) setErrors({ email: 'This email is already in use' });
    }

  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const isFormValid =
    formik.values.email &&
    formik.values.country &&
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.password &&
    formik.values.repeatPassword &&
    formik.values.agreement &&
    formik.isValid &&
    formik.dirty;

  return isCreating ? (
    <CircularProgress />
  ) : (
    <ModalLayout open={openRegistration} setOpen={handleClose}>
      <Typography variant='h5' sx={styles.title}>
        {changeColorOfLastTitleWord(t('modal.registration.title'))}
      </Typography>
      <form className='landingForm' onSubmit={formik.handleSubmit} style={{ width: '100%' }} autoComplete='off'>
        <FormInput
          name='email'
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label='modal.registration.email'
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          autoComplete='off'
          placeholder='example@example.com'
          handleKeyDown={handleKeyDown}
        />
        <Box sx={styles.inputNameContainer}>
          <FormInput
            name='firstName'
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label='modal.registration.first_name'
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            autoComplete='off'
          />
          <FormInput
            name='lastName'
            value={formik.values.lastName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='modal.registration.last_name'
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            autoComplete='off'
          />
        </Box>
        <AdvancedFormSelector
          variant='outlined'
          name='country'
          value={formik.values.country}
          handleChange={handleChangeCountry}
          handleBlur={formik.handleBlur}
          label='modal.registration.country'
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
          countries={userCountries}
          autoComplete='off'
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
          autoComplete='new-password'
          iconStyle={styles.iconStyle}
          signupPassword
        />
        <FormInput
          showPassword={showPassword}
          type='password'
          name='repeatPassword'
          value={formik.values.repeatPassword}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label='modal.registration.password_repeat'
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
          autoComplete='new-password'
          iconStyle={styles.iconStyle}
        />
        <FormCheckbox
          checked={formik.values.news}
          changeHandler={formik.handleChange}
          name='news'
          helperText={formik.touched.news && formik.errors.news}
          label='modal.registration.news_letter'
          error={formik.touched.news && Boolean(formik.errors.news)}
        />
        <FormCheckbox
          checked={formik.values.agreement}
          changeHandler={formik.handleChange}
          name='agreement'
          helperText={formik.touched.agreement && formik.errors.agreement}
          label='modal.registration.agreement'
          error={formik.touched.agreement && Boolean(formik.errors.agreement)}
        />
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            variant='contained'
            type='submit'
            handlerClick={formik.handleSubmit}
            disabled={!isFormValid}
            label='modal.registration.btn_register'
            correctStyle={styles.submitBtn}
          />
        </Box>
        <Box sx={styles.policyTermsContainer}>
          <Link
            to={'/privacy_policy'}
            aria-disabled
            component={RouterLink}
            sx={styles.policyTermsLink}
            onClick={handleClose}
          >
            {t('modal.registration.privacy_policy')}
          </Link>
          <Link to={'/terms_and_conditions'} component={RouterLink} sx={styles.policyTermsLink} onClick={handleClose}>
            {t('modal.registration.terms_and_conditions')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default RegistrationModal;
