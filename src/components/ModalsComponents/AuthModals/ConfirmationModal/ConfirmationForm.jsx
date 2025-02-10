import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { openModal } from '../../../../redux/modal/modalSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { modalNames } from '../../../../utils/constants/modalNames.js';
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
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleCloseAllModal = () => {
    dispatch(openModal({ modalType: modalNames.registrationModal }));
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

  const handleKeyDown = (event, index) => {
    const { key, ctrlKey, metaKey } = event;

    if ((ctrlKey || metaKey) && key === 'v') return;
    if (key === 'Tab') return;

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
     } else if (key === 'Enter' && index === fieldCount - 1) {
      formik.handleSubmit();
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
    // handleSubmit();
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
      <Box sx={styles.formInput}>
        {[...Array(fieldCount)].map((_, index) => (
          <TextField
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            autocomplete={false}
            inputProps={{
              style: { textAlign: 'center' },
              maxLength: 1,
            }}
            inputRef={(ele) => {
              inputRefs.current[index] = ele;
            }}
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#B78AF7',
                backgroundColor: 'transparent',
              },
              ...(helperTextContent && {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ED0E0E',
                  },
                },
              }),
              '& .MuiOutlinedInput-root': {
                '& input:-webkit-autofill': {
                  WebkitBoxShadow: '0 0 0 100px transparent inset',
                  WebkitTextFillColor: 'inherit',
                  transition: 'background-color 5000s ease-in-out 0s',
                },
              },
            }}
            type='text'
            value={formik.values[`text${index}`] ?? ''}
            variant='outlined'
            onKeyDown={(event) => handleKeyDown(event, index)}
            onPaste={handlePaste}
          />
        ))}
      </Box>

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
          <Link sx={styles.confirmationLink} to={'/'}>
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
};

export default ConfirmationForm;
