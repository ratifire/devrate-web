import { Box, Link, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSnackbar } from 'notistack';
import { useRef, useState } from 'react';
import { useChangePasswordMutation, useResetPasswordMutation } from '@redux/api/slices/auth/authApiSlice';
import { closeModal, openModal } from '@redux/slices/modal/modalSlice';
import { resetPasswordSchema } from '@utils/validationSchemas';
import changeColorOfLastTitleWord from '@utils/helpers/changeColorOfLastTitleWord.jsx';
import { modalNames } from '@utils/constants/modalNames.js';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { FormInput } from '../../../../FormsComponents/Inputs';
import styles from './ResetPassword.styles';

const initialValues = {
  newPassword: '',
  repeatPassword: '',
  code: ['', '', '', '', '', ''],
};

const fieldCount = 6;

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRefs = useRef([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email.email);
  const { enqueueSnackbar } = useSnackbar();
  const [changePassword, { isError, isSuccess }] = useChangePasswordMutation();
  const [sendResetEmail] = useResetPasswordMutation();

  const handleCloseAllModal = () => {
    dispatch(closeModal());
    dispatch(openModal({ modalType: modalNames.checkEmailModal }));
  };

  const handleResendCode = async (e) => {
    e.preventDefault();
    await sendResetEmail({ email });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

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
    } else if (key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      inputRefs.current[index - 1].focus();
    } else if (key === 'ArrowRight' && index < fieldCount - 1) {
      event.preventDefault();
      inputRefs.current[index + 1].focus();
    } else if (key === 'v' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      navigator.clipboard.readText().then((text) => {
        handlePaste(
          {
            clipboardData: { getData: () => text },
            preventDefault: () => {},
          },
          formik
        );
      });
    }
  };

  return (
    <>
      <Typography sx={styles.title} variant='subtitle3'>
        {changeColorOfLastTitleWord(t('modal.resetPassword.title'))}
      </Typography>
      <Box sx={styles.mainTextWrapper}>
        <Typography sx={styles.mainText} variant='subtitle3'>
          {t('modal.confirmation.main_text1')}
          <br />
          <Typography component='span' sx={styles.userEmail} variant='subtitle3'>
            {email.replace(/(?<=.{1}).(?=[^@]*?.@)/g, '*')}
          </Typography>
          .
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
              email,
            };
            await changePassword(requestData).unwrap();
            enqueueSnackbar('Password changed successfully!', { variant: 'success' });
            resetForm();
            dispatch(closeModal({ modalName: 'openResetPassword' }));
            dispatch(openModal({ modalName: 'openNotification' }));
            // eslint-disable-next-line no-unused-vars
          } catch (error) {
            enqueueSnackbar('Invalid code. Please try again.', { variant: 'error' });
          }
        }}
      >
        {(formik) => (
          <Form autoComplete='off' className='landingForm' style={{ width: '100%' }}>
            <Box sx={styles.resetPasswordForm}>
              {[...Array(fieldCount)].map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={index}>
                  <TextField
                    inputProps={{
                      style: { textAlign: 'center' },
                      maxLength: 1,
                      autoComplete: 'off',
                      'data-lpignore': 'true',
                    }}
                    inputRef={(ele) => {
                      inputRefs.current[index] = ele;
                    }}
                    sx={{
                      ...styles.codeFocusWrapper,
                      ...(isError && {
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#ED0E0E',
                          },
                        },
                      }),
                    }}
                    type='text'
                    value={formik.values.code[index] ?? ''}
                    variant='outlined'
                    onKeyDown={(event) => handleKeyDown(event, index, formik)}
                    onPaste={(event) => handlePaste(event, formik)}
                  />
                </React.Fragment>
              ))}
            </Box>

            {isError && (
              <Box sx={styles.codeErrorWrapper}>
                <CancelIcon sx={styles.codeErrorIcon} />
                <Typography sx={styles.codeErrorText} variant='subtitle2'>
                  {t('modal.resetPassword.error')}
                </Typography>
              </Box>
            )}

            <FormInput
              signupPassword
              autoComplete='new-password'
              clickHandler={handleClickShowPassword}
              error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
              extraProps={{
                'data-lpignore': 'true',
                'data-form-type': 'other',
              }}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
              iconStyle={styles.iconStyle}
              label='New Password'
              mouseDownHandler={handleMouseDownPassword}
              name='newPassword'
              showPassword={showPassword}
              type='password'
              value={formik.values.newPassword}
            />
            <FormInput
              autoComplete='new-password'
              clickHandler={handleClickShowPassword}
              error={formik.touched.repeatPassword && Boolean(formik.errors.repeatPassword)}
              extraProps={{
                'data-lpignore': 'true',
                'data-form-type': 'other',
              }}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.repeatPassword && formik.errors.repeatPassword}
              iconStyle={styles.iconStyle}
              label='Repeat New Password'
              mouseDownHandler={handleMouseDownPassword}
              name='repeatPassword'
              showPassword={showPassword}
              type='password'
              value={formik.values.repeatPassword}
            />
            <Box sx={styles.wrapperBtn}>
              <ButtonDef
                disabled={!formik.isValid || !formik.dirty}
                label={t('modal.resetPassword.btn_change_password')}
                loading={formik.isSubmitting}
                sx={styles.submitBtn}
                type='submit'
                variant='contained'
              />
            </Box>
            {isSuccess && <Typography color='primary'>{t('modal.resetPassword.success')}</Typography>}
          </Form>
        )}
      </Formik>

      <Box sx={styles.box} variant='subtitle3'>
        <Typography sx={styles.bottom_subtitle} variant='subtitle3'>
          {t('modal.checkEmailResetPassword.subtitle3')}
        </Typography>

        <Typography sx={styles.bottom_subtitle} variant='subtitle3'>
          <Link component={RouterLink} sx={styles.link} to={'/'} variant='subtitle3' onClick={handleResendCode}>
            {t('modal.checkEmailResetPassword.resend_link')}
          </Link>{' '}
          {t('modal.checkEmailResetPassword.middle_text')}
          <Link component={RouterLink} sx={styles.link} to={'/'} variant='subtitle3' onClick={handleCloseAllModal}>
            {t('modal.checkEmailResetPassword.change_email')}
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default ResetPassword;
