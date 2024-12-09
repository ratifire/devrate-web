import * as React from 'react';
// import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Box, Link, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { CheckResetEmailSchema } from '../../../../../utils/valadationSchemas/index';
import { FormInput } from '../../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { closeModal, openModal } from '../../../../../redux/modal/modalSlice';
import { useResetPasswordMutation } from '../../../../../redux/auth/authApiSlice';
import { setEmail } from '../../../../../redux/auth/emailSlice';
import ModalLayout from '../../../../../layouts/ModalLayout';
import changeColorOfLastTitleWord from '../../../../../utils/helpers/changeColorOfLastTitleWord';
import styles from './CheckEmail.styles';

const initialValues = {
  email: '',
};

const CheckEmail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const openCheckEmail = useSelector((state) => state.modal.openCheckEmail);
  const handleClose = () => dispatch(closeModal({ modalName: 'openCheckEmail' }));

  const [sendResetEmail] = useResetPasswordMutation();

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (values, { resetForm }) => {
    try {
      await sendResetEmail({ email: values.email });
      resetForm();
      dispatch(setEmail(values.email));
      dispatch(closeModal({ modalName: 'openCheckEmail' }));
      dispatch(openModal({ modalName: 'openResetPassword' }));
    } catch (error) {
      enqueueSnackbar('Error sending email. Please try again.', { variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: CheckResetEmailSchema,
    onSubmit,
  });

  return (
    <ModalLayout open={openCheckEmail} setOpen={handleClose}>
      <Typography sx={styles.title} variant='h5'>
        {changeColorOfLastTitleWord(t('modal.checkEmailResetPassword.title'))}
      </Typography>
      <Typography sx={styles.subtitle} variant='subtitle3'>
        {t('modal.checkEmailResetPassword.subtitle1')}
        <br />
        {t('modal.checkEmailResetPassword.subtitle2')}
      </Typography>
      <form className='landingForm' style={{ width: '100%' }} onSubmit={formik.handleSubmit}>
        <FormInput
          error={formik.touched.email && Boolean(formik.errors.email)}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          helperText={formik.touched.email && formik.errors.email}
          label='modal.checkEmailResetPassword.email'
          name='email'
          type='email'
          value={formik.values.email}
        />
        <Box sx={styles.wrapperBtn}>
          <ButtonDef
            correctStyle={styles.submitBtn}
            disabled={!formik.values.email || (formik.touched.email && Boolean(formik.errors.email))}
            handlerClick={formik.handleSubmit}
            label={t('modal.checkEmailResetPassword.btn_send_letter')}
            loading={formik.isSubmitting}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>

      <Box sx={styles.policyLinkBox}>
        <Typography sx={styles.policyText} variant='caption1'>
          {t('modal.login.text_privacy')}
        </Typography>
        <Box>
          <Link
            sx={styles.policyLink}
            onClick={(e) => {
              e.preventDefault();
              // handleClose();
              // navigate('/#');
            }}
          >
            {t('modal.login.text_privacy_policy')}
          </Link>{' '}
          &{' '}
          <Link
            sx={styles.policyLink}
            onClick={(e) => {
              e.preventDefault();
              // handleClose();
              // navigate('/#');
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
