import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ModalLayout from '../../../../layouts/ModalLayout';
import styles from './ResetPassword.styles';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Box, Link, Typography } from '@mui/material';
import { ResetPasswordSchema } from './ResetPasswordSchema';
import { FormInput } from '../../../Inputs';
import { ButtonDef } from '../../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useChangePasswordMutation } from '../../../../redux/auth/authApiSlice';

const initialValues = {
  newPassword: '',
  repeatCode: '',
  code: '', // Add code field
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openResetPassword = useSelector((state) => state.modal.openResetPassword);
  const handleClose = () => dispatch(closeModal({ modalName: 'openResetPassword' }));

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const [changePassword, { isError, isSuccess }] = useChangePasswordMutation();

  return (
    <ModalLayout open={openResetPassword} setOpen={handleClose}>
      <Typography variant='subtitle3' sx={styles.title}>{t('modal.resetPassword.title')}</Typography>
      <Box sx={styles.mainTextWrapper}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text1')} <Typography variant='subtitle3' component='span' sx={styles.userEmail}>user@mail.com</Typography>.
        </Typography>
        <Typography variant='subtitle3' sx={styles.mainText}>{t('modal.confirmation.main_text2')}</Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            console.log('Submitting form...');
            console.log('Data sent to server:', values);
            const requestData = {
              code: values.text0 + values.text1 + values.text2 + values.text3 + values.text4 + values.text5,
              newPassword: values.newPassword,
            };
            const response = await changePassword(requestData).unwrap();
            console.log('Password change response:', response);
            alert('Password changed successfully!');
            resetForm();
            handleClose();
          } catch (error) {
            console.error('Error changing password:', error);
            alert('Error changing password. Please try again.');
          }
        }}
      >
        {formik => (
          <Form autoComplete='off' style={{ width: '100%' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {[...Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                  <FormInput
                    type="text"
                    name={`text${index}`}
                    value={formik.values[`text${index}`] ?? ''}
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    label={`Digit ${index + 1}`}
                    error={formik.touched[`text${index}`] && Boolean(formik.errors[`text${index}`])}
                    helperText={formik.touched[`text${index}`] && formik.errors[`text${index}`]}
                    maxLength={1}
                  />
                </React.Fragment>
              ))}
            </Box>
            <FormInput
              showPassword={showPassword}
              type={showPassword ? 'text' : 'password'}
              name='newPassword'
              value={formik.values.newPassword}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='New Password'
              error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
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
              label='Repeat New Password'
              error={formik.touched.repeatCode && Boolean(formik.errors.repeatCode)}
              helperText={formik.touched.repeatCode && formik.errors.repeatCode}
              clickHandler={handleClickShowPassword}
              mouseDownHandler={handleMouseDownPassword}
            />
            <Box sx={styles.wrapperBtn}>
              <ButtonDef
                variant='contained'
                type='submit'
                disabled={!formik.isValid || !formik.dirty}
                label={t('modal.resetPassword.btn_change_password')}
              />
            </Box>
            {isError && <Typography color="error">Error changing password. Please try again.</Typography>}
            {isSuccess && <Typography color="primary">Password changed successfully!</Typography>}
          </Form>
        )}
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
