import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import styles from '../RegistrationModal/RegistrationModal.styles';
import { RegistrationSchema } from './RegistraionSchema';
import PropTypes from 'prop-types';
import { InputText } from '../../Inputs';
import { PasswordVisibilityToggle } from '../../PasswordVisibilityToggle/PasswordVisibilityToggle';

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
        <InputText
          id={'email'}
          name={'email'}
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type={'email'}
          label={t('modal.registration.email')}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <FormControl fullWidth variant='outlined' sx={{ marginBottom: 24 }}>
          <InputLabel id='country-label'>{t('modal.registration.country')}</InputLabel>
          <Select
            id='country'
            labelId='country-label'
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={t('modal.registration.country')}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            FormHelperTextProps={{
              sx: { position: 'absolute', bottom: '-20px' },
            }}
          >
            <MenuItem value={'ukraine'}>{t('modal.registration.countries.ukraine')}</MenuItem>
            <MenuItem value={'poland'}>{t('modal.registration.countries.poland')}</MenuItem>
            <MenuItem value={'usa'}>{t('modal.registration.countries.usa')}</MenuItem>
          </Select>
        </FormControl>
        <Box sx={styles.inputNameContainer}>
          <InputText
            id={'firstName'}
            name={'firstName'}
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label={t('modal.registration.first_name')}
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          />
          <InputText
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
        <TextField
          type={showPassword ? 'text' : 'password'}
          fullWidth
          label={t('modal.registration.password')}
          variant='outlined'
          id='password'
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ width: '100%', marginBottom: 24 }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
          InputProps={{
            endAdornment: (
              <PasswordVisibilityToggle
                showPassword={showPassword}
                clickHandler={handleClickShowPassword}
                mouseDownHandler={handleMouseDownPassword}
                tooltip={true}
                textContent='modal.registration.password_tooltip'
              />
            ),
          }}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          fullWidth
          label={t('modal.registration.password_repeat')}
          variant='outlined'
          id='repeatPassword'
          name='repeatPassword'
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ width: '100%', marginBottom: 24 }}
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
          InputProps={{
            endAdornment: (
              <PasswordVisibilityToggle
                showPassword={showPassword}
                clickHandler={handleClickShowPassword}
                mouseDownHandler={handleMouseDownPassword}
                tooltip={false}
              />
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.newsletter}
              onChange={formik.handleChange}
              name='promo'
              sx={{
                color: '#F1F1F1',
                '&.Mui-checked': {
                  color: '#F1F1F1',
                },
              }}
            />
          }
          label={<Typography sx={styles.newsAgreementText}>{t('modal.registration.news_letter')}</Typography>}
          helperText={formik.touched.news && formik.errors.news}
          FormHelperTextProps={{
            sx: { position: 'absolute', bottom: '-20px' },
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.agreement}
              onChange={formik.handleChange}
              name='agreement'
              sx={{
                color: '#F1F1F1',
                '&.Mui-checked': {
                  color: '#F1F1F1',
                },
              }}
            />
          }
          label={<Typography sx={styles.newsAgreementText}>{t('modal.registration.agreement')}</Typography>}
          sx={{ marginBottom: 24 }}
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
