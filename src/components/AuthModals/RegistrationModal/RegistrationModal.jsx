import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, CircularProgress, Link, Typography } from '@mui/material';
import styles from './RegistrationModal.styles';
import { RegistrationSchema } from './RegistrationSchema';
import { AdvancedFormSelector, FormCheckbox, FormInput } from '../../Inputs';
import { ButtonDef } from '../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useCreateUserMutation } from '../../../redux/auth/authApiSlice';
import { closeModal, openModal } from '../../../redux/modal/modalSlice';
import { useGetCountryListQuery } from '../../../redux/countryList/countryApiSlice';

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

  useEffect(() => {
    formik.setFieldValue('country', country);
  }, [country]);

  const onSubmit = (values, { resetForm }) => {
    const { email, firstName, lastName, country, news, password } = values;
    createUser({
      email,
      firstName,
      lastName,
      country,
      subscribed: news,
      password,
    });
    resetForm();
    dispatch(closeModal({ modalName: 'openRegistration' }));
    dispatch(openModal({ modalName: 'openConfirmation' }));
  };
  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return isCreating ? (
    <CircularProgress />
  ) : (
    <ModalLayout open={openRegistration} setOpen={handleClose}>
      <Typography variant="subtitle2" sx={styles.title}>{t('modal.registration.title')}</Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }} autoComplete="off">
        <FormInput
          name="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type="email"
          label="modal.registration.email"
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          countries={userCountries}
          autoComplete="off"
        />
        <AdvancedFormSelector
          variant="outlined"
          name="country"
          value={formik.values.country}
          handleChange={handleChangeCountry}
          handleBlur={formik.handleBlur}
          label="modal.registration.country"
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
          countries={userCountries}
          autoComplete="off"
        />
        <Box sx={styles.inputNameContainer}>
          <FormInput
            name="firstName"
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type="text"
            label="modal.registration.first_name"
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            autoComplete="off"
          />
          <FormInput
            name="lastName"
            value={formik.values.lastName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label="modal.registration.last_name"
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            autoComplete="off"
          />
        </Box>
        <FormInput
          showPassword={showPassword}
          type="password"
          name="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label="modal.registration.password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
          autoComplete="new-password"
          iconStyle={styles.iconStyle}
        />
        <FormInput
          showPassword={showPassword}
          type="password"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label="modal.registration.password_repeat"
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
          autoComplete="new-password"
          iconStyle={styles.iconStyle}
        />
        <FormCheckbox
          checked={formik.values.news}
          changeHandler={formik.handleChange}
          name="news"
          helperText={formik.touched.news && formik.errors.news}
          label="modal.registration.news_letter"
          error={formik.touched.news && Boolean(formik.errors.news)}
        />
        <FormCheckbox
          checked={formik.values.agreement}
          changeHandler={formik.handleChange}
          name="agreement"
          helperText={formik.touched.agreement && formik.errors.agreement}
          label="modal.registration.agreement"
          error={formik.touched.agreement && Boolean(formik.errors.agreement)}
        />
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            variant="contained"
            type="submit"
            handlerClick={formik.handleSubmit}
            disabled={(!formik.values.news && true) || (!formik.values.agreement && true)}
            label="modal.registration.btn_register"
          />
        </Box>
        <Box sx={styles.policyTermsContainer}>
          <Link to={'/'} component={RouterLink} sx={styles.policyTermsLink} onClick={handleClose}>
            {t('modal.registration.privacy_policy')}
          </Link>
          <Link to={'/'} component={RouterLink} sx={styles.policyTermsLink} onClick={handleClose}>
            {t('modal.registration.terms_and_conditions')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default RegistrationModal;
