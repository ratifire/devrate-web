import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ModalLayout from '../../../../layouts/ModalLayout';
import styles from './ResetPassword.styles';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { Box, Link, Typography, TextField } from '@mui/material';
import { ResetPasswordSchema } from './ResetPasswordSchema';
import { FormInput } from '../../../Inputs';
import { ButtonDef } from '../../../Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useChangePasswordMutation } from '../../../../redux/auth/authApiSlice';

const initialValues = {
  newPassword: '',
  repeatPassword: '',
  code: ['', '', '', '', '', ''],
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

  const fieldCount = 6;

  const inputRefs = React.useRef([]);

  const handleKeyDown = (event, index, formik) => {
    const { key } = event;

    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      const { value } = event.target;

      if (value.length === 0 || (value.length === 1 && (key === 'Backspace' || key === 'Delete'))) {
        if (key >= '0' && key <= '9') {
          event.preventDefault();
          const newValue = value + key;
          formik.setFieldValue(`code[${index}]`, newValue);

          if (index < fieldCount - 1 && !formik.values.code[index + 1]) {
            inputRefs.current[index + 1].focus();
          }
        } else if (key === 'Backspace' && index > 0) {
          event.preventDefault();
          formik.setFieldValue(`code[${index}]`, '');
          inputRefs.current[index - 1].focus();
        } else if (key === 'Delete' && index < fieldCount - 1) {
          event.preventDefault();
          formik.setFieldValue(`code[${index}]`, '');
          inputRefs.current[index + 1].focus();
        }
      } else {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  };

  const _handleCodeChange = (code) => {
    console.log('Code entered:', code);
  };

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
            const requestData = {
              code: values.code.join(''),
              newPassword: values.newPassword,
            };
            const response = await changePassword(requestData).unwrap();
            _handleCodeChange(values.code.join('')); 
            console.log(response); 
            alert('Password changed successfully!');
            resetForm();
            handleClose();
          } catch (error) {
            console.error('Error changing password:', error);
            alert('Error changing password. Please try again.');
          }
        }}
      >
        {(formik) => (
          <Form autoComplete='off' style={{ width: '100%' }}>
            <Box sx={ styles.resetPasswordForm }>
              {[...Array(fieldCount)].map((_, index) => (
                <React.Fragment key={index}>
                  <TextField
                    type="text"
                    variant="outlined"
                    inputRef={(ele) => {
                      inputRefs.current[index] = ele;
                    }}
                    onKeyDown={(event) => handleKeyDown(event, index, formik)}
                    value={formik.values.code[index] ?? ''}
                    inputProps={{ style: { textAlign: 'center' }, maxLength: 1 }}
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
              name='repeatPassword'
              value={formik.values.repeatPassword}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='Repeat New Password'
              error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
              helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
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