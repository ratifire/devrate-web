import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../../layouts/ModalLayout';
import styles from './ResetPassword.styles';

import { useTranslation } from 'react-i18next';

import { Form, Formik, useFormik } from 'formik';

import { Box, Link, Typography } from '@mui/material';
import { ResetPasswordSchema } from './ResetPasswordSchema';
import { FormInput } from '../../../Inputs';
import { ButtonDef } from '../../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/modal/modalSlice';

const initialValues = {
  password: '',
  repeatPassword: '',
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openResetPassword = useSelector((state) => state.modal.openResetPassword);
  const handleClose = () => dispatch(closeModal({ modalName: 'openResetPassword' }));

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
    <ModalLayout open={openResetPassword} setOpen={handleClose}>
      <Typography variant='subtitle3' sx={styles.title}>{t('modal.resetPassword.title')}</Typography>
      <Formik initialValues={formik.initialValues} onSubmit={onSubmit}>
        <Form autoComplete='off' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <FormInput
            showPassword={showPassword}
            type='password'
            name='password'
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='modal.resetPassword.password'
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
            label='modal.resetPassword.password_repeat'
            error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
            helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
            clickHandler={handleClickShowPassword}
            mouseDownHandler={handleMouseDownPassword}
          />
          <Box sx={styles.wrapperBtn}>
            <ButtonDef
              variant='contained'
              type='submit'
              handlerClick={formik.handleSubmit}
              disabled={
                (formik.touched.repeatPassword && formik.errors.repeatPassword) ||
                (formik.touched.password && formik.errors.password)
              }
              label='modal.resetPassword.btn_change_password'
            />
          </Box>
        </Form>
      </Formik>
      <Typography  variant='subtitle3' sx={styles.text}>{t('modal.resetPassword.text_privacy')}</Typography>
      <Typography  variant='subtitle3' sx={styles.textLink}>
        {t('modal.resetPassword.return_on')}
        <Link  variant='subtitle3' to={'/'} component={RouterLink} sx={styles.link} onClick={handleClose}>
          {t('modal.resetPassword.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

export default ResetPassword;
