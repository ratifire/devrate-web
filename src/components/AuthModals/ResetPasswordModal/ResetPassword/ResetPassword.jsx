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
import { useChangePasswordMutation } from '../../../../redux/auth/authApiSlice';
import ConfirmationForm from '../../ConfirmationModal/ConfirmationForm';

const initialValues = {
  code: '',
  repeatCode: '',
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openResetPassword = useSelector((state) => state.modal.openResetPassword);
  const handleClose = () => dispatch(closeModal({ modalName: 'openResetPassword' }));

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const [changePassword] = useChangePasswordMutation();
  const inputRefs = React.useRef([]);

  const formik = useFormik({
    initialValues,
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await changePassword({
          code: values.code,
        });
        alert('Password changed successfully!');
        resetForm();
        handleClose();
      } catch (error) {
        console.error('Error changing password:', error);
        alert('Error changing password. Please try again.');
      }
    },
  });

  return (
    <ModalLayout open={openResetPassword} setOpen={handleClose}>
      <Typography variant='subtitle3' sx={styles.title}>{t('modal.resetPassword.title')}</Typography>
      <Box sx={styles.mainTextWrapper}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text1')} <Typography variant='subtitle3' component='span' sx={styles.userEmail}>user@mail.com</Typography>.
        </Typography>
        <Typography variant='subtitle3' sx={styles.mainText}>{t('modal.confirmation.main_text2')}</Typography>
      </Box>
      <ConfirmationForm
        inputRefs={inputRefs}
        formik={formik}
        helperTextContent=""
        buttonLabel="Enter Code"
        fieldCount={6}
        showButton={false}
      />
      <Formik initialValues={formik.initialValues} onSubmit={formik.handleSubmit}>
        <Form autoComplete='off' onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <FormInput
            showPassword={showPassword}
            type={showPassword ? 'text' : 'password'}
            name='code'
            value={formik.values.code}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='Password'
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
            clickHandler={handleClickShowPassword}
            mouseDownHandler={handleMouseDownPassword}
          />
          <FormInput
            showPassword={showPassword}
            type={showPassword ? 'text' : 'password'}
            name='repeatCode'
            value={formik.values.repeatCode}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='Repeat password'
            error={formik.touched.repeatCode && Boolean(formik.errors.repeatCode)}
            helperText={formik.touched.repeatCode && formik.errors.repeatCode}
            clickHandler={handleClickShowPassword}
            mouseDownHandler={handleMouseDownPassword}
          />
          <Box sx={styles.wrapperBtn}>
            <ButtonDef
              variant='contained'
              type='submit'
              handlerClick={formik.handleSubmit}
              disabled={
                (formik.touched.repeatCode && formik.errors.repeatCode) ||
                (formik.touched.code && formik.errors.code)
              }
              label='modal.resetPassword.btn_change_password'
            />
          </Box>
        </Form>
      </Formik>
      <Typography variant='subtitle3' sx={styles.text}>{t('modal.resetPassword.text_privacy')}</Typography>
      <Typography variant='subtitle3' sx={styles.textLink}>
        {t('modal.resetPassword.return_on')}
        <Link variant='subtitle3' to={'/'} component={RouterLink} sx={styles.link} onClick={handleClose}>
          {t('modal.resetPassword.home_page')}
        </Link>
      </Typography>
    </ModalLayout>
  );
};

export default ResetPassword;