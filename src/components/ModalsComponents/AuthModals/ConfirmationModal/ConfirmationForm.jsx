import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, FormHelperText, TextField } from '@mui/material';
import { ButtonDef } from '../../../FormsComponents/Buttons';
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
  useEffect(() => {
    const allFieldsFilled = Object.keys(formik.values)
      .filter(key => key.startsWith('text'))
      .every(key => formik.values[key] !== '');

    if (allFieldsFilled) {
      formik.validateForm();
    }
  }, [formik.values]);

  const handleKeyDown = (event, index) => {
    const { key } = event;

    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      const { value } = event.target;

      if (value.length === 0 || (value.length === 1 && (key === 'Backspace' || key === 'Delete'))) {
        if (key >= '0' && key <= '9') {
          event.preventDefault();
          const newValue = value + key;
          formik.setFieldValue(`text${index}`, newValue);

          if (index < fieldCount - 1 && !formik.values[`text${index + 1}`]) {
            inputRefs.current[index + 1].focus();
          }
        } else if (key === 'Backspace' && index > 0) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index - 1].focus();
        } else if (key === 'Delete' && index < fieldCount - 1) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index + 1].focus();
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
    handleCodeChange(numericData);
    setTimeout(() => {
      formik.validateForm();
    }, 0);
  };

  const handleCode = () => {
    const code = Array.from({ length: fieldCount }, (_, i) => formik.values[`text${i}`]).join('');
    handleCodeChange(code);
  };

  return (
    <form onSubmit={handleSubmit || formik.handleSubmit} style={{ width: '100%' }}>
      <Box sx={styles.formInput}>
        {[...Array(fieldCount)].map((_, index) => (
          <React.Fragment key={index}>
            <TextField
              type="text"
              variant="outlined"
              inputRef={(ele) => {
                inputRefs.current[index] = ele;
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onPaste={handlePaste}
              value={formik.values[`text${index}`] ?? ''}
              inputProps={{ style: { textAlign: 'center' }, maxLength: 1 }}
            />
          </React.Fragment>
        ))}
      </Box>

      <FormHelperText>{helperTextContent}</FormHelperText>

      {showButton && (
        <Box sx={styles.btnWrapper}>
          <ButtonDef sx={styles.btn}
            variant={buttonVariant || 'contained'}
            onClick={() => {
              handleSubmit();
              handleCode();
            }}
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
  helperTextContent: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonVariant: PropTypes.string,
  handleSubmit: PropTypes.func,
  fieldCount: PropTypes.number,
  showButton: PropTypes.bool,
  handleCodeChange: PropTypes.func.isRequired,
};

export default ConfirmationForm;