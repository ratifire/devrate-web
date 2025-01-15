import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Box, Link, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { CheckResetEmailSchema } from '../../../../../utils/validationSchemas';
import { FormInput } from '../../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { closeModal, openModal } from '../../../../../redux/modal/modalSlice';
import { useResetPasswordMutation } from '../../../../../redux/auth/authApiSlice';
import { setEmail } from '../../../../../redux/auth/emailSlice';
import changeColorOfLastTitleWord from '../../../../../utils/helpers/changeColorOfLastTitleWord.jsx';
import { modalNames } from '../../../../../utils/constants/modalNames.js';
import styles from './CheckEmail.styles';

const initialValues = {
  email: '',
};

const CheckEmail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [sendResetEmail] = useResetPasswordMutation();

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (values, { resetForm }) => {
    try {
      await sendResetEmail({ email: values.email });
      resetForm();
      dispatch(setEmail(values.email));
      dispatch(closeModal());
      dispatch(openModal({ modalType: modalNames.resetPasswordModal }));
      // eslint-disable-next-line no-unused-vars
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
    <>
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
            disabled={!formik.values.email || (formik.touched.email && Boolean(formik.errors.email))}
            label={t('modal.checkEmailResetPassword.btn_send_letter')}
            loading={formik.isSubmitting}
            sx={styles.submitBtn}
            type='submit'
            variant='contained'
            onClick={formik.handleSubmit}
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
            }}
          >
            {t('modal.login.text_privacy_policy')}
          </Link>{' '}
          &{' '}
          <Link
            sx={styles.policyLink}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {t('modal.login.text_privacy_terms')}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default CheckEmail;
