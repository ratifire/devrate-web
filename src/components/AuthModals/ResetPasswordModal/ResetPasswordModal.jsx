import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../layouts/ModalLayout';
import styles from './ResetPasswordModal.styles';

import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { Button, Link, Typography } from '@mui/material';
import { ResetPasswordSchema } from './ResetPasswordSchema';
import { InputPassword } from '../../Inputs';

const initialValues = {
  password: '',
  repeatPassword: '',
};

const ResetPasswordModal = ({ open, setOpen }) => {
  const { t } = useTranslation();

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
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <InputPassword
          name='password'
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='password'
          label={t('modal.resetPassword.password')}
          helperText={formik.touched.password && formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          toolTipOn={true}
          toolTipText={t('modal.resetPassword.password_tooltip')}
        />
        <InputPassword
          name='repeatPassword'
          value={formik.values.repeatPassword}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='password'
          label={t('modal.resetPassword.password_repeat')}
          helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
          error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
        />
        <Button type='submit' sx={styles.btn}>
          {t('modal.resetPassword.btn_change_password')}
        </Button>
      </form>
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
