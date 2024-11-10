import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ModalLayout from '../../../../../layouts/ModalLayout';
import styles from './CheckEmail.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Box, Link, Typography } from '@mui/material';
import { CheckResetEmailSchema } from '../../../../../utils/valadationSchemas/index';
import { FormInput } from '../../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../../../../redux/modal/modalSlice';
import { useResetPasswordMutation } from '../../../../../redux/auth/authApiSlice';
import { setEmail } from '../../../../../redux/auth/emailSlice';
import { toast } from 'react-toastify';
import changeColorOfLastTitleWord from '../../../../../utils/helpers/changeColorOfLastTitleWord';

const initialValues = {
  email: '',
};

const CheckEmail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openCheckEmail = useSelector((state) => state.modal.openCheckEmail);
  const handleClose = () => dispatch(closeModal({ modalName: 'openCheckEmail' }));

  const [sendResetEmail] = useResetPasswordMutation();

  const onSubmit = async (values, { resetForm }) => {
    try {
      await sendResetEmail({ email: values.email });
      resetForm();
      dispatch(setEmail(values.email));
      dispatch(closeModal({ modalName: 'openCheckEmail' }));
      dispatch(openModal({ modalName: 'openResetPassword' }));
    } catch (error) {
      toast.error('Error sending email. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: CheckResetEmailSchema,
    onSubmit,
  });

  return (
    <ModalLayout open={openCheckEmail} setOpen={handleClose}>
      <Typography variant='h5' sx={styles.title}>
        {changeColorOfLastTitleWord(t('modal.checkEmailResetPassword.title'))}
      </Typography>
      <Typography variant='subtitle3' sx={styles.subtitle}>
        {t('modal.checkEmailResetPassword.subtitle1')}
        <br />
        {t('modal.checkEmailResetPassword.subtitle2')}
      </Typography>
      <form className='landingForm' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
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
            disabled={!formik.values.email || (formik.touched.email && Boolean(formik.errors.email))}
            label='modal.checkEmailResetPassword.btn_send_letter'
            correctStyle={styles.submitBtn}
          />
        </Box>
      </form>

      <Box sx={styles.policyLinkBox}>
        <Typography variant='caption1' sx={styles.policyText}>
          {t('modal.login.text_privacy')}
        </Typography>
        <Box>
          <Link
            sx={styles.policyLink}
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              navigate('/#');
            }}
          >
            {t('modal.login.text_privacy_policy')}
          </Link>{' '}
          &{' '}
          <Link
            sx={styles.policyLink}
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              navigate('/#');
            }}
          >
            {t('modal.login.text_privacy_terms')}
          </Link>
        </Box>
      </Box>
    </ModalLayout>
  );
};

export default CheckEmail;
