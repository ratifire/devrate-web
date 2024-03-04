import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout';
import styles from './ResetPasswordModal.styles';

import { useTranslation } from 'react-i18next';

import { Form, Formik, useFormik } from 'formik';
import PropTypes from 'prop-types';

import { Button, Link, Typography } from '@mui/material';
import { ResetPasswordSchema } from './ResetPasswordSchema';
import FormInput from '../../Inputs/FormInput';

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
    validationSchema: ResetPasswordSchema,
    onSubmit: onSubmit,
  });

  return (
    <ModalLayout open={open} setOpen={setOpen}>
      <Typography sx={styles.title}>{t('modal.resetPassword.title')}</Typography>
      <Formik initialValues={formik.initialValues} onSubmit={onSubmit}>
        <Form autoComplete='off' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <FormInput
            showPassword={showPassword}
            type='password'
            name='password'
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label={t('modal.resetPassword.password')}
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
            label={t('modal.resetPassword.password_repeat')}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            clickHandler={handleClickShowPassword}
            mouseDownHandler={handleMouseDownPassword}
          />
          <Button
            onClick={formik.handleSubmit}
            sx={styles.btn}
            disabled={
              (formik.touched.repeat_password && formik.errors.repeat_password) ||
              (formik.touched.password && formik.errors.password)
            }
          >
            {t('modal.resetPassword.btn_change_password')}
          </Button>
        </Form>
      </Formik>
      <Typography sx={styles.text}>{t('modal.resetPassword.text_privacy')}</Typography>
      <Typography sx={styles.textLink}>
        {t('modal.resetPassword.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={setOpen}>
          {t('modal.resetPassword.home_page')}
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
