import { Box, Link, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import ModalLayout from '../../../../../layouts/ModalLayout';
import { useChangePasswordMutation } from '../../../../../redux/auth/authApiSlice';
import { closeModal, openModal } from '../../../../../redux/modal/modalSlice';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { FormInput } from '../../../../FormsComponents/Inputs';
import styles from './ResetPassword.styles';
import { resetPasswordSchema } from '../../../../../utils/valadationSchemas/index';
import {toast} from "react-toastify";

const initialValues = {
  newPassword: '',
  repeatPassword: '',
  code: ['', '', '', '', '', ''],
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openResetPassword = useSelector((state) => state.modal.openResetPassword);
  const email = useSelector((state) => state.email.email);
  const handleClose = () => dispatch(closeModal({ modalName: 'openResetPassword' }));

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const [changePassword, { isError, isSuccess }] = useChangePasswordMutation();

  const fieldCount = 6;

  const inputRefs = React.useRef([]);

  const handlePaste = (event, formik) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newCode = [...formik.values.code];
    
    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i];
    }
    
    formik.setFieldValue('code', newCode);
    
    const focusIndex = Math.min(pastedData.length, fieldCount - 1);
    inputRefs.current[focusIndex].focus();
  };

  const handleKeyDown = (event, index, formik) => {
    const { key } = event;

    if (key >= '0' && key <= '9') {
      event.preventDefault();
      const newValue = formik.values.code[index] + key;
      formik.setFieldValue(`code[${index}]`, newValue.slice(-1));

      if (index < fieldCount - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (key === 'Backspace' || key === 'Delete') {
      event.preventDefault();
      formik.setFieldValue(`code[${index}]`, '');

      // if (key === 'Backspace' && index > 0) {
      //   inputRefs.current[index - 1].focus();
      // } else if (key === 'Delete' && index < fieldCount - 1) {
      //   inputRefs.current[index + 1].focus();
      // }
    } else if (key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1].focus();
    } else if (key === 'ArrowRight' && index < fieldCount - 1) {
      event.preventDefault();
      inputRefs.current[index + 1].focus();
    } else if (key === 'v' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      navigator.clipboard.readText().then(text => {
        handlePaste({ clipboardData: { getData: () => text }, preventDefault: () => {} }, formik);
      });
    }
  };

  return (
    <ModalLayout open={openResetPassword} setOpen={handleClose}>
      <Typography variant='subtitle3' sx={styles.title}>
        {t('modal.resetPassword.title')}
      </Typography>
      <Box sx={styles.mainTextWrapper}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text1')}{' '}
          <Typography variant='subtitle3' component='span' sx={styles.userEmail}>
            {email.replace(/(?<=.{1}).(?=[^@]*?.@)/g, '*')}
          </Typography>
          .
        </Typography>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.main_text2')}
        </Typography>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const requestData = {
              code: values.code.join(''),
              newPassword: values.newPassword,
            };
            await changePassword(requestData).unwrap();
             toast('Password changed successfully!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
             });
            resetForm();
            dispatch(closeModal({ modalName: 'openResetPassword' }));
            dispatch(openModal({ modalName: 'openLogin' }));
          } catch (error) {
            console.error('Error changing password:', error);
               toast.error('Error changing password. Please try again.', {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
              });
          }
        }}
      >
        {(formik) => (
          <Form autoComplete='off' style={{ width: '100%' }}>
            <Box sx={styles.resetPasswordForm}>
              {[...Array(fieldCount)].map((_, index) => (
                <React.Fragment key={index}>
                  <TextField
                    type='text'
                    variant='outlined'
                    inputRef={(ele) => {
                      inputRefs.current[index] = ele;
                    }}
                    onKeyDown={(event) => handleKeyDown(event, index, formik)}
                    onPaste={(event) => handlePaste(event, formik)}
                    value={formik.values.code[index] ?? ''}
                    inputProps={{
                      style: { textAlign: 'center' },
                      maxLength: 1,
                      autoComplete: 'off',
                      'data-lpignore': 'true'
                    }}
                    sx={styles.resetPasswordForm['& .MuiOutlinedInput-root']}
                  />
                </React.Fragment>
              ))}
            </Box>
            <FormInput
              showPassword={showPassword}
              type='password'
              name='newPassword'
              value={formik.values.newPassword}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='New Password'
              error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
              clickHandler={handleClickShowPassword}
              mouseDownHandler={handleMouseDownPassword}
              iconStyle={styles.iconStyle}
              autoComplete='new-password'
              extraProps={{
                'data-lpignore': 'true',
                'data-form-type': 'other',
              }}
            />
            <FormInput
              showPassword={showPassword}
              type='password'
              name='repeatPassword'
              value={formik.values.repeatPassword}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='Repeat New Password'
              error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
              helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
              clickHandler={handleClickShowPassword}
              mouseDownHandler={handleMouseDownPassword}
              iconStyle={styles.iconStyle}
              autoComplete='new-password'
              extraProps={{
                'data-lpignore': 'true',
                'data-form-type': 'other',
              }}
            />
            <Box sx={styles.wrapperBtn}>
              <ButtonDef
                variant='contained'
                type='submit'
                disabled={!formik.isValid || !formik.dirty}
                label={t('modal.resetPassword.btn_change_password')}
              />
            </Box>
            {isError && <Typography color='error'>{t('modal.resetPassword.error')}</Typography>}
            {isSuccess && <Typography color='primary'>{t('modal.resetPassword.success')}</Typography>}
          </Form>
        )}
      </Formik>

      <Typography variant='subtitle3' sx={styles.text}>
        {t('modal.resetPassword.text_privacy')}
      </Typography>
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
