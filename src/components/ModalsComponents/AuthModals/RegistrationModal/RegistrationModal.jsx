import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Box, Link, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import { useCreateUserMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice';
import { useGetCountryListQuery } from '@redux/api/slices/countryList/countryApiSlice';
import { RegistrationSchema } from '@utils/validationSchemas';
import { CountryFormSelector, FormCheckbox, FormInput } from '@components/FormsComponents/Inputs';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import changeColorOfLastTitleWord from '@utils/helpers/changeColorOfLastTitleWord.jsx';
import { modalNames } from '@utils/constants/modalNames.js';
import styles from './RegistrationModal.styles';

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
  const [createUser, { isLoading: isLoadingCreating }] = useCreateUserMutation();
  const { data: userCountries } = useGetCountryListQuery();

  const handleChangeCountry = (value) => {
    setCountry(value);
  };

  const handleClose = () => dispatch(closeModal());

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
        country: country.target.value,
        subscribed: news,
        password,
      }).unwrap();

      resetForm();
      dispatch(closeModal());
      dispatch(openModal({ modalType: modalNames.confirmationModal, data: email }));
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
          <CountryFormSelector
            required
            autoComplete='off'
            countries={userCountries}
            error={formik.touched.country && Boolean(formik.errors.country)}
            handleBlur={formik.handleBlur}
            handleChange={handleChangeCountry}
            helperText={formik.touched.country && formik.errors.country}
            label='modal.registration.country'
            name='country'
            value={formik.values.country}
            variant='outlined'
          />
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
        <FormCheckbox
          changeHandler={formik.handleChange}
          checked={formik.values.news}
          error={formik.touched.news && Boolean(formik.errors.news)}
          helperText={formik.touched.news && formik.errors.news}
          label='modal.registration.news_letter'
          name='news'
        />
        <FormCheckbox
          changeHandler={formik.handleChange}
          checked={formik.values.agreement}
          error={formik.touched.agreement && Boolean(formik.errors.agreement)}
          helperText={formik.touched.agreement && formik.errors.agreement}
          label='modal.registration.agreement'
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
        <Box sx={styles.policyTermsContainer}>
          <Link component={RouterLink} sx={styles.policyTermsLink} to={'/privacy_policy'} onClick={handleClose}>
            {t('modal.registration.privacy_policy')}
          </Link>
          <Link component={RouterLink} sx={styles.policyTermsLink} to={'/terms_and_conditions'} onClick={handleClose}>
            {t('modal.registration.terms_and_conditions')}
          </Link>
        </Box>
      </form>
    </>
  );
};

export default RegistrationModal;
