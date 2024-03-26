import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, Link, Typography } from '@mui/material';
import styles from './RegistrationModal.styles';
import { RegistrationSchema } from './RegistrationSchema';
import { FormCheckbox, FormInput, FormSelect } from '../../Inputs';
import { userCountries } from '../../../utils/constants/userCountries';
import { ButtonDef } from '../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/auth/modalSlice';
import { Link as RouterLink } from 'react-router-dom';

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
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openRegistration = useSelector((state) => state.modal.openRegistration);
  const handleClose = () => dispatch(closeModal({ modalName: 'openRegistration' }));

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <ModalLayout open={openRegistration} setOpen={handleClose}>
      <Typography sx={styles.title}>{t('modal.registration.title')}</Typography>
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
        <FormSelect
          variant='outlined'
          name='country'
          value={formik.values.country}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={'modal.registration.country'}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
          countries={userCountries}
          itemsText={'modal.registration.countries'}
        />
        <Box sx={styles.inputNameContainer}>
          <FormInput
            name='firstName'
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label={t('modal.registration.first_name')}
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          />
          <FormInput
            name='lastName'
            value={formik.values.lastName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label={t('modal.registration.last_name')}
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          />
        </Box>
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
        <FormInput
          showPassword={showPassword}
          type='password'
          name='repeatPassword'
          value={formik.values.repeatPassword}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={t('modal.registration.password_repeat')}
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
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
            disabled={(!formik.values.news && true) || (!formik.values.agreement && true)}
            label='modal.registration.btn_register'
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
