import * as React from 'react';
import {Link as RouterLink} from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import styles from './ResetPasswordModal.styles';

import {useTranslation} from 'react-i18next';

import {Form, Formik, useFormik} from 'formik';
import * as Yup from 'yup';

import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Tooltip,
  Typography,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// eslint-disable-next-line react/prop-types
const ResetPasswordModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, t('modal.password_short'))
      .max(50, t('modal.password_long'))
      .required(t('modal.required')),
    repeat_password: Yup.string()
      .min(6, t('modal.password_short'))
      .max(50, t('modal.password_long'))
      .oneOf([Yup.ref('password'), null], t('modal.must_match'))
      .required(t('modal.required')),
  });
  const Submit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  const formik = useFormik({
    initialValues: {
      password: '',
      repeat_password: '',
    },
    validationSchema: validationSchema,
    onSubmit: Submit,
  });

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.password_reset')}</Typography>
      <Formik initialValues={formik.initialValues} onSubmit={Submit} validationSchema={validationSchema}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form autoComplete='off' onSubmit={handleSubmit} style={{ width: '100%' }}>
            <FormControl variant='outlined' sx={styles.input} error={touched.password && Boolean(errors.password)}>
              <InputLabel htmlFor='outlined-adornment-password'>{t('modal.password')}</InputLabel>
              <OutlinedInput
                id='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
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
                }
                label={t('modal.password')}
              />
              <FormHelperText id='component-error-text'>{touched.password && errors.password}</FormHelperText>
            </FormControl>
            <FormControl
              variant='outlined'
              sx={styles.input}
              error={touched.repeat_password && Boolean(errors.repeat_password)}
            >
              <InputLabel htmlFor='outlined-adornment-password'>{t('modal.password_repeat')}</InputLabel>
              <OutlinedInput
                id='repeat_password'
                name='repeat_password'
                value={values.repeat_password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                      sx={{ marginRight: 0 }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={t('modal.password_repeat')}
              />
              <FormHelperText id='component-error-text'>
                {touched.repeat_password && errors.repeat_password}
              </FormHelperText>
            </FormControl>
            <Button
              onClick={handleSubmit}
              sx={styles.btn}
              disabled={(touched.repeat_password && errors.repeat_password) || (touched.password && errors.password)}
            >
              {t('modal.password_reset')}
            </Button>
          </Form>
        )}
      </Formik>
      <Typography sx={styles.text}>{t('modal.text_b_privacy')}</Typography>
      <Typography sx={styles.textLink}>
        {t('modal.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('modal.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};
export default ResetPasswordModal;
