import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, TextField, Typography } from '@mui/material';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import styles from './ConfirmationModal.styles';
import { useTranslation } from 'react-i18next';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';

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
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCloseAllModal = () => {
    dispatch(closeModal({ modalName: 'openRegistration' }));
    dispatch(closeModal({ modalName: 'openConfirmation' }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.keys(formik.values)
      .filter((key) => key.startsWith('text'))
      .every((key) => formik.values[key] !== '');

    if (allFieldsFilled) {
      formik.validateForm();
    }
  }, [formik.values]);

  const handleKeyDown = (event, index) => {
    const { key, ctrlKey, metaKey } = event;

    if ((ctrlKey || metaKey) && key === 'v') {
      return;
    }

    if (key === 'Tab') {
      return;
    }
    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      const { value } = event.target;

      if (value.length === 0 || (value.length === 1 && (key === 'Backspace' || key === 'Delete'))) {
        if (key >= '0' && key <= '9') {
          event.preventDefault();
          const newValue = value + key;
          formik.setFieldValue(`text${index}`, newValue);

          if (index < fieldCount - 1 && !formik.values[`text${index}`]) {
            inputRefs.current[index + 1].focus();
          }
        } else if (key === 'Backspace') {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');

          if (index > 0) {
            inputRefs.current[index - 1].focus();
          }
        } else if (key === 'Delete' && index < fieldCount - 1) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index - 1].focus();
        }
      } else {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pastedData = event.clipboardData.getData('text');
    const numericData = pastedData.replace(/\D/g, '').slice(0, fieldCount);

    numericData.split('').forEach((char, index) => {
      formik.setFieldValue(`text${index}`, char);
      inputRefs.current[index].value = char;
    });

    const nextFieldIndex = numericData.length;
    if (nextFieldIndex < fieldCount) {
      inputRefs.current[nextFieldIndex].focus();
    }

    setTimeout(() => {
      formik.validateForm();
    }, 0);
  };

  const handleCode = () => {
    const code = Array.from({ length: fieldCount }, (_, i) => formik.values[`text${i}`]).join('');
    handleCodeChange(code);
  };

  const handleClick = () => {
    handleSubmit();
    handleCode();
  };

  return (
    <form className='landingForm' onSubmit={handleSubmit || formik.handleSubmit} style={{ width: '100%' }}>
      <Box sx={styles.formInput}>
        {[...Array(fieldCount)].map((_, index) => (
          <TextField
            key={index}
            type='text'
            variant='outlined'
            inputRef={(ele) => {
              inputRefs.current[index] = ele;
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onPaste={handlePaste}
            value={formik.values[`text${index}`] ?? ''}
            inputProps={{
              style: { textAlign: 'center' },
              maxLength: 1,
            }}
          />
        ))}
      </Box>

      {helperTextContent && (
        <Box sx={styles.codeErrorWrapper}>
          <CancelIcon sx={styles.codeErrorIcon} />
          <Typography variant='subtitle2' sx={styles.codeErrorText}>
            {t('modal.confirmation.code_error_text')}
          </Typography>
        </Box>
      )}

      <Box variant='subtitle3' sx={styles.spamCheckContainer}>
        <Typography variant='subtitle3' sx={styles.mainText}>
          {t('modal.confirmation.spam_check_text')}
        </Typography>
        <Typography sx={{ textAlign: 'center' }}>
          <Link sx={styles.confirmationLink} to={'/'} onClick={handleCloseAllModal}>
            {t('modal.confirmation.repeat_request_link')}
          </Link>
          <Typography variant='subtitle3' sx={styles.mainText}>
            {' '}
            {t('modal.confirmation.repeat_request_text1')}
          </Typography>
          <Typography variant='subtitle3' sx={styles.mainText}>
            {' '}
            {t('modal.confirmation.repeat_request_text2')}{' '}
          </Typography>
          <Link sx={styles.confirmationLink} to={'/'} onClick={handleCloseAllModal}>
            {t('modal.confirmation.change_email_link')}
          </Link>
        </Typography>
        <Typography></Typography>
      </Box>

      {showButton && (
        <Box sx={styles.btnWrapper}>
          <ButtonDef
            sx={styles.btn}
            type='submit'
            variant={buttonVariant || 'contained'}
            onClick={handleClick}
            label={buttonLabel || 'modal.confirmation.btn_confirm'}
            disabled={!formik.isValid}
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
};

export default ConfirmationForm;
