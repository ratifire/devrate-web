import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import { Box, Button, IconButton, InputAdornment, Link, TextField, Tooltip, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../LoginModal/LoginModal.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { LoginModalValidationSchema } from '../../../utils/validationSchemas/LoginModalValidationSchema';

const initialValues = {
  email: '',
  password: '',
};

// eslint-disable-next-line react/prop-types
const LoginModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const ValidationSchema = LoginModalValidationSchema;

  const formik = useFormik({
    initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.login')}</Typography>
      <form autoComplete='off' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <TextField
          fullWidth
          label={t('modal.email')}
          variant='outlined'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={styles.input}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ ...styles.input, marginBottom: 32 }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
        <Button type='submit' sx={styles.btn}>
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
      </form>
    </ModalLayout>
  );
};

export default LoginModal;
