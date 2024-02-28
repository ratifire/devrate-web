import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout';
import styles from './ResetPasswordModal.styles';

import { useTranslation } from 'react-i18next';

import { Form, Formik, useFormik } from 'formik';
import PropTypes from 'prop-types';

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
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ResetPasswordModalValidationSchema } from '../../../utils/validationSchemas/ResetPasswordModalValidationSchema';

const initialValues = {
  password: '',
  repeat_password: '',
};

const ResetPasswordModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: ResetPasswordModalValidationSchema,
    onSubmit: onSubmit,
  });

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.title_reset')}</Typography>
      <Formik initialValues={formik.initialValues} onSubmit={onSubmit}>
        <Form autoComplete='off' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <FormControl
            variant='outlined'
            sx={styles.input}
            error={formik.touched.password && Boolean(formik.errors.password)}
          >
            <InputLabel htmlFor='outlined-adornment-password'>{t('inputs.password')}</InputLabel>
            <OutlinedInput
              id='password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
                    <Tooltip title={<Typography sx={styles.tooltip}>{t('inputs.password_tooltip')}</Typography>}>
                      <IconButton sx={{ marginRight: 0 }}>
                        <InfoOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                </>
              }
              label={t('inputs.password')}
            />
            <FormHelperText id='component-error-text'>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
          <FormControl
            variant='outlined'
            sx={styles.input}
            error={formik.touched.repeat_password && Boolean(formik.errors.repeat_password)}
          >
            <InputLabel htmlFor='outlined-adornment-password'>{t('inputs.password_repeat')}</InputLabel>
            <OutlinedInput
              id='repeat_password'
              name='repeat_password'
              value={formik.values.repeat_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              label={t('inputs.password_repeat')}
            />
            <FormHelperText id='component-error-text'>
              {formik.touched.repeat_password && formik.errors.repeat_password}
            </FormHelperText>
          </FormControl>
          <Button
            onClick={formik.handleSubmit}
            sx={styles.btn}
            disabled={
              (formik.touched.repeat_password && formik.errors.repeat_password) ||
              (formik.touched.password && formik.errors.password)
            }
          >
            {t('buttons.btn_change_password')}
          </Button>
        </Form>
      </Formik>
      <Typography sx={styles.text}>{t('modal.text_privacy')}</Typography>
      <Typography sx={styles.textLink}>
        {t('modal.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('links.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

ResetPasswordModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ResetPasswordModal;
