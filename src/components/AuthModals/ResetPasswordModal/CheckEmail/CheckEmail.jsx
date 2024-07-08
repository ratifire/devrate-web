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
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import { useResetPasswordMutation } from '../../../../redux/auth/authApiSlice';
import { setEmail } from '../../../../redux/auth/emailSlice';

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

  const [sendResetEmail] = useResetPasswordMutation();

  const onSubmit = async (values, { resetForm }) => {
    try {
      await sendResetEmail({ email: values.email });
      resetForm();
      dispatch(setEmail(values.email)); // Save email to the Redux store
      dispatch(closeModal({ modalName: 'openCheckEmail' }));
      dispatch(openModal({ modalName: 'openResetPassword' }));
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: CheckEmailSchema,
    onSubmit,
  });

  return (
    <ModalLayout open={openCheckEmail} setOpen={handleClose}>
      <Typography variant='subtitle3' sx={styles.title}>
        {t('modal.checkEmailResetPassword.send_letter_title')}
      </Typography>
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
      <Box variant='subtitle3' sx={styles.box}>
        <Link variant='subtitle3' to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
          {t('modal.checkEmailResetPassword.privacy_policy')}
        </Link>
        <Link variant='subtitle3' to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
          {t('modal.checkEmailResetPassword.terms_and_conditions')}
        </Link>
      </Box>
      <Typography variant='subtitle3' sx={styles.textLink}>
        {t('modal.checkEmailResetPassword.return_on')}
        <Link variant='subtitle3' to={'/'} component={RouterLink} sx={styles.link} onClick={handleCloseAllModal}>
          {t('modal.checkEmailResetPassword.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

export default CheckEmail;
