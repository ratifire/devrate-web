import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import ModalLayout from '../../../layouts/ModalLayout';
import { Box, Link, Typography } from '@mui/material';
import styles from '../LoginModal/LoginModal.styles';
import { LoginSchema } from './LoginSchema';
import FormInput from '../../Inputs/FormInput';
import { ButtonDef } from '../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../../redux/auth/modal';

const initialValues = {
  email: '',
  password: '',
};
const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openLogin = useSelector((state) => state.modal.openLogin);
  const handleClose = () => dispatch(closeModal({ modalName: 'openLogin' }));
  const handleOpen = () => dispatch(openModal({ modalName: 'openCheckEmail' }));

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <ModalLayout open={openLogin} setOpen={handleClose}>
      <Typography sx={styles.title}>{t('modal.login.title')}</Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormInput
          name='email'
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label={t('modal.registration.email')}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <FormInput
          showPassword={showPassword}
          type='password'
          name='password'
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={t('modal.registration.password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          clickHandler={handleClickShowPassword}
          mouseDownHandler={handleMouseDownPassword}
        />
        <Box sx={styles.textLink}>
          <ButtonDef
            variant='text'
            correctStyle={styles.turnBackLink}
            handlerClick={handleOpen}
            type='button'
            label={t('modal.login.forgot_your_password')}
          />
        </Box>
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            variant='contained'
            type='submit'
            handlerClick={formik.handleSubmit}
            disabled={
              (formik.touched.email && Boolean(formik.errors.email)) ||
              (formik.touched.password && Boolean(formik.errors.password))
            }
            label={t('modal.login.btn_login')}
          />
        </Box>

        <Typography href='#' sx={styles.policyText}>
          {t('modal.login.text_privacy')}
        </Typography>
        <Box sx={styles.turnBackContainer}>
          <Typography href='#' sx={styles.turnBackText}>
            {t('modal.login.return_on')}
          </Typography>
          <Link href='#' sx={styles.turnBackLink} onClick={handleClose}>
            {t('modal.login.home_page')}
          </Link>
        </Box>
      </form>
    </ModalLayout>
  );
};

export default LoginModal;
