import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import { Box, Button, IconButton, InputAdornment, Link, TextField, Tooltip, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../LoginModal/LoginModal.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { LoginModalValidationSchema } from '../../../utils/validationSchemas/LoginModalValidationSchema';
import PropTypes from 'prop-types';
import InputText from '../../Inputs';

const initialValues = {
  email: '',
  password: '',
};

// eslint-disable-next-line react/prop-types
const LoginModal = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginModalValidationSchema,
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
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <InputText
          id={'email'}
          name={'email'}
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type={'email'}
          label={t('inputs.email')}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          fullWidth
          label={t('inputs.password')}
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
                  <Tooltip title={<Typography sx={styles.tooltip}>{t('inputs.password_tooltip')}</Typography>}>
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
            {t('links.forgot_your_password')}
          </Link>
        </Box>
        <Button type='submit' sx={styles.btn}>
          {t('buttons.btn_login').toUpperCase()}
        </Button>
        <Typography href='#' sx={styles.policyText}>
          {t('modal.text_privacy')}
        </Typography>
        <Box sx={styles.turnBackContainer}>
          <Typography href='#' sx={styles.turnBackText}>
            {t('modal.return_on')}
          </Typography>
          <Link href='#' sx={styles.turnBackLink}>
            {t('links.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default LoginModal;
