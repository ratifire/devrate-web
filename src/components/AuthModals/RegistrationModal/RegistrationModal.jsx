import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, Button, Link, Typography } from '@mui/material';
import styles from '../RegistrationModal/RegistrationModal.styles';
import { RegistrationSchema } from './RegistrationSchema';
import PropTypes from 'prop-types';
import { CountrySelect, FormCheckbox } from '../../Inputs';
import { userCountries } from '../../../utils/constants/userCountries';
import FormInput from '../../Inputs/FormInput/FormInput';

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

const RegistrationModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
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
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.registration.title')}</Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormInput
          id={'email'}
          name={'email'}
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label={t('modal.registration.email')}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <CountrySelect
          id={'contry'}
          name={'country'}
          value={formik.values.country}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={t('modal.registration.country')}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
          countries={userCountries}
          itemsText={'modal.registration.countries'}
        />
        <Box sx={styles.inputNameContainer}>
          <FormInput
            id={'firstName'}
            name={'firstName'}
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label={t('modal.registration.first_name')}
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          />
          <FormInput
            id={'lastName'}
            name={'lastName'}
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
          label={t('modal.registration.password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
        />
        <FormCheckbox
          checked={formik.values.newsletter}
          changeHandler={formik.handleChange}
          name='promo'
          helperText={formik.touched.news && formik.errors.news}
          label={t('modal.registration.news_letter')}
        />
        <FormCheckbox
          checked={formik.values.agreement}
          changeHandler={formik.handleChange}
          name='agreement'
          helperText={formik.touched.news && formik.errors.news}
          label={t('modal.registration.agreement')}
        />

        <Button
          disabled={(!formik.values.promo && true) || (!formik.values.agreement && true)}
          type='submit'
          sx={styles.btn}
        >
          {t('modal.registration.btn_register')}
        </Button>
        <Box sx={styles.policyTermsContainer}>
          <Link href='#' sx={styles.policyTermsLink}>
            {t('modal.registration.privacy_policy')}
          </Link>
          <Link href='#' sx={styles.policyTermsLink}>
            {t('modal.registration.terms_and_conditions')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

RegistrationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default RegistrationModal;
