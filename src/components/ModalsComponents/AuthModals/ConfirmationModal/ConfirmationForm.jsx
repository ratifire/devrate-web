import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { openModal } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames.js';
import { useRegistrationResendCodeMutation } from '@redux/api/slices/auth/authApiSlice';
import ConfirmCode from '@components/UI/ConfirmCode';
import styles from './ConfirmationModal.styles';

const ConfirmationForm = ({
  inputRefs,
  formik,
  helperTextContent,
  buttonLabel,
  buttonVariant,
  handleCodeChange,
  handleSubmit,
  fieldCount = 6,
  showButton = true,
  email,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [sendResetCode] = useRegistrationResendCodeMutation();

  const handleCloseAllModal = () => {
    dispatch(openModal({ modalType: modalNames.registrationModal }));
  };

  const handleResendCode = async (e) => {
    e.preventDefault();
    await sendResetCode({ email });
  };

  const isActiveButton = () => Object.values(formik.values).some((value) => value === '');

  useEffect(() => {
    const allFieldsFilled = Object.keys(formik.values)
      .filter((key) => key.startsWith('text'))
      .every((key) => formik.values[key] !== '');

    if (allFieldsFilled) {
      formik.validateForm();
    }
  }, [formik.values]);

  const handleCode = () => {
    const code = Array.from({ length: fieldCount }, (_, i) => formik.values[`text${i}`]).join('');
    handleCodeChange(code);
  };

  const handleClick = () => {
    formik.handleSubmit();
    handleCode();
  };

  return (
    <form
      autoComplete='off'
      className='landingForm'
      style={{ width: '100%' }}
      onSubmit={handleSubmit || formik.handleSubmit}
    >
      <ConfirmCode formik={formik} inputRefs={inputRefs} />

      {helperTextContent && (
        <Box sx={styles.codeErrorWrapper}>
          <CancelIcon sx={styles.codeErrorIcon} />
          <Typography sx={styles.codeErrorText} variant='subtitle2'>
            {t('modal.confirmation.code_error_text')}
          </Typography>
        </Box>
      )}

      <Box sx={styles.spamCheckContainer} variant='subtitle3'>
        <Typography sx={styles.mainText} variant='subtitle3'>
          {t('modal.confirmation.spam_check_text')}
        </Typography>
        <Typography sx={{ textAlign: 'center' }}>
          <Link sx={styles.confirmationLink} to={'/'} onClick={handleResendCode}>
            {t('modal.confirmation.repeat_request_link')}
          </Link>
          <Typography sx={styles.mainText} variant='subtitle3'>
            {' '}
            {t('modal.confirmation.repeat_request_text1')}
          </Typography>
          <Typography sx={styles.mainText} variant='subtitle3'>
            {' '}
            {t('modal.confirmation.repeat_request_text2')}{' '}
          </Typography>
          <Typography sx={styles.confirmationLink} onClick={handleCloseAllModal}>
            {t('modal.confirmation.change_email_link')}
          </Typography>
        </Typography>
        <Typography />
      </Box>

      {showButton && (
        <Box sx={styles.btnWrapper}>
          <ButtonDef
            disabled={isActiveButton()}
            label={buttonLabel || 'modal.confirmation.btn_confirm'}
            loading={formik.isSubmitting}
            sx={styles.submitBtn}
            type='submit'
            variant={buttonVariant || 'contained'}
            onClick={handleClick}
          />
        </Box>
      )}
    </form>
  );
};

ConfirmationForm.propTypes = {
  inputRefs: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired,
  helperTextContent: PropTypes.bool,
  buttonLabel: PropTypes.string,
  buttonVariant: PropTypes.string,
  handleSubmit: PropTypes.func,
  fieldCount: PropTypes.number,
  showButton: PropTypes.bool,
  handleCodeChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ConfirmationForm;
