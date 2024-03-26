import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import ModalLayout from '../../../../layouts/ModalLayout';
import styles from './CheckEmail.styles';

import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import { Box, Link, Typography } from '@mui/material';
import { CheckEmailSchema } from './CheckEmailSchema';
import { FormInput } from '../../../Inputs';
import { ButtonDef } from '../../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/auth/modalSlice';

const initialValues = {
  email: '',
};

const CheckEmail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openCheckEmail = useSelector((state) => state.modal.openCheckEmail);
  const handleClose = () => dispatch(closeModal({ modalName: 'openCheckEmail' }));
  const handleCloseAllModal = () => {
    dispatch(closeModal({ modalName: 'openLogin' }));
    dispatch(closeModal({ modalName: 'openCheckEmail' }));
  };

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: CheckEmailSchema,
    onSubmit,
  });

  return (
    <ModalLayout open={openCheckEmail} setOpen={handleClose}>
      <Typography sx={styles.title}>{t('modal.checkEmailResetPassword.send_letter_title')}</Typography>
      <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
        <FormInput
          name='email'
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='email'
          label='modal.checkEmailResetPassword.email'
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            variant='contained'
            type='submit'
            handlerClick={formik.handleSubmit}
            disabled={formik.touched.email && Boolean(formik.errors.email)}
            label='modal.checkEmailResetPassword.btn_send_letter'
          />
        </Box>
      </form>
      <Box sx={styles.box}>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
          {t('modal.checkEmailResetPassword.privacy_policy')}
        </Link>
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
          {t('modal.checkEmailResetPassword.terms_and_conditions')}
        </Link>
      </Box>
      <Typography sx={styles.textLink}>
        {t('modal.checkEmailResetPassword.return_on')}
        <Link to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
          {t('modal.checkEmailResetPassword.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

export default CheckEmail;
