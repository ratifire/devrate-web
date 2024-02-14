import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import ModalLayout from '../../ModalLayout/ModalLayout';
import { Button, TextField, Typography, Box, Link, InputAdornment, IconButton, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../LoginModal/LoginModal.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const initialValues = {
  email: '',
  password: '',
};

// eslint-disable-next-line react/prop-types
const LoginModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email(t('modal.invalid_email')).required(t('modal.required')),
    password: Yup.string()
      .min(6, t('modal.password_long'))
      .max(50, t('modal.password_long'))
      .required(t('modal.required')),
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.login')}</Typography>
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
              sx={styles.input}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              FormHelperTextProps={{
                sx: { position: 'absolute', bottom: '-20px' },
              }}
            />

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
              sx={{ ...styles.input, marginBottom: 32 }}
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
                        <IconButton>
                          <InfoOutlinedIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  </>
                ),
              }}
            />
            <Box sx={styles.textLink}>
              <Link href='#' sx={styles.link}>
                {t('modal.forgotYourPassword')}
              </Link>
            </Box>
            <Button
              // disabled={(!values.promo && true) || (!values.agreement && true)}
              type='submit'
              sx={styles.btn}
            >
              {t('modal.loginButtonText').toUpperCase()}
            </Button>
            <Typography href='#' sx={styles.policyText}>
              {t('modal.loginAgreementText')}
            </Typography>
            <Box sx={styles.turnBackContainer}>
              <Typography href='#' sx={styles.turnBackText}>
                {t('modal.loginTurnTo')}
              </Typography>
              <Link href='#' sx={styles.turnBackLink}>
                {t('modal.loginToMainPage')}
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </ModalLayout>
  );
};
export default LoginModal;
