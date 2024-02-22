import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../RegistrationModal/RegistrationModal.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
// eslint-disable-next-line react/prop-types
const RegistrationModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email(t('modal.invalid_email')).required(t('modal.required')),
    country: Yup.string().required(t('modal.required')),
    firstName: Yup.string()
      .min(2, t('modal.firstName_short'))
      .max(50, t('modal.firstName_long'))
      .required(t('modal.required')),
    lastName: Yup.string()
      .min(2, t('modal.lastName_short'))
      .max(50, t('modal.lastName_long'))
      .required(t('modal.required')),
    password: Yup.string()
      .min(6, t('modal.password_long'))
      .max(50, t('modal.password_long'))
      .required(t('modal.required')),
    repeatPassword: Yup.string()
      .min(6, t('modal.password_long'))
      .max(50, t('modal.password_long'))
      .oneOf([Yup.ref('password'), null], t('modal.must_match'))
      .required(t('modal.required')),
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.registration')}</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
        validationSchema={ValidationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form autoComplete='off' onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              fullWidth
              label={t('modal.email')}
              variant='outlined'
              id='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%', marginBottom: 24, borderColor: 'green' }}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              FormHelperTextProps={{
                sx: { position: 'absolute', bottom: '-20px' },
              }}
            />
            <FormControl fullWidth variant='outlined' sx={{ marginBottom: 24 }}>
              <InputLabel id='country-label'>{t('modal.country')}</InputLabel>
              <Select
                id='country'
                labelId='country-label'
                name='country'
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                label={t('modal.country')}
                error={touched.country && Boolean(errors.country)}
                helperText={touched.country && errors.country}
                FormHelperTextProps={{
                  sx: { position: 'absolute', bottom: '-20px' },
                }}
              >
                <MenuItem value={'ukraine'}>{t('modal.ukraine')}</MenuItem>
                <MenuItem value={'poland'}>{t('modal.poland')}</MenuItem>
                <MenuItem value={'usa'}>{t('modal.usa')}</MenuItem>
              </Select>
            </FormControl>
            <Box sx={styles.inputNameContainer}>
              <TextField
                fullWidth
                label={t('modal.firstName')}
                variant='outlined'
                id='firstName'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ marginRight: 10 }}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                FormHelperTextProps={{
                  sx: { position: 'absolute', bottom: '-20px' },
                }}
              />
              <TextField
                fullWidth
                label={t('modal.lastName')}
                variant='outlined'
                id='lastName'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                FormHelperTextProps={{
                  sx: { position: 'absolute', bottom: '-20px' },
                }}
              />
            </Box>
            <TextField
              type={showPassword ? 'text' : 'password'}
              fullWidth
              label={t('modal.password')}
              variant='outlined'
              id='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%', marginBottom: 24 }}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              FormHelperTextProps={{
                sx: { position: 'absolute', bottom: '-20px' },
              }}
              InputProps={{
                endAdornment: (
                  <>
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                        sx={{ marginRight: -12 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                    <InputAdornment position='end'>
                      <Tooltip title={<Typography sx={styles.tooltip}>{t('modal.password_tooltip')}</Typography>}>
                        <IconButton sx={{ marginRight: 0 }}>
                          <InfoOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  </>
                ),
              }}
            />
            <TextField
              type={showPassword ? 'text' : 'password'}
              fullWidth
              label={t('modal.repeatPassword')}
              variant='outlined'
              id='repeatPassword'
              name='repeatPassword'
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%', marginBottom: 24 }}
              error={touched.repeatPassword && Boolean(errors.repeatPassword)}
              helperText={touched.repeatPassword && errors.repeatPassword}
              FormHelperTextProps={{
                sx: { position: 'absolute', bottom: '-20px' },
              }}
              InputProps={{
                endAdornment: (
                  <>
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                        // sx={{ marginRight: 0 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  </>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.newsletter}
                  onChange={handleChange}
                  name='promo'
                  sx={{
                    color: '#F1F1F1',
                    '&.Mui-checked': {
                      color: '#F1F1F1',
                    },
                  }}
                />
              }
              label={<Typography sx={styles.newsAgreementText}>{t('modal.newsletter')}</Typography>}
              helperText={touched.news && errors.news}
              FormHelperTextProps={{
                sx: { position: 'absolute', bottom: '-20px' },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.agreement}
                  onChange={handleChange}
                  name='agreement'
                  sx={{
                    color: '#F1F1F1',
                    '&.Mui-checked': {
                      color: '#F1F1F1',
                    },
                  }}
                />
              }
              label={<Typography sx={styles.newsAgreementText}>{t('modal.agreement')}</Typography>}
              sx={{ marginBottom: 24 }}
            />
            <Button disabled={(!values.promo && true) || (!values.agreement && true)} type='submit' sx={styles.btn}>
              {t('modal.register')}
            </Button>
            <Box sx={styles.policyTermsContainer}>
              <Link href='#' sx={styles.policyTermsLink}>
                {t('modal.privacy_policy')}
              </Link>
              <Link href='#' sx={styles.policyTermsLink}>
                {t('modal.terms_and_conditions')}
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </ModalLayout>
  );
};
export default RegistrationModal;
