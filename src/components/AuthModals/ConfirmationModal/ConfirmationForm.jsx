import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormHelperText, TextField } from '@mui/material';
import { ButtonDef } from '../../Buttons';

const ConfirmationForm = ({
  inputRefs,
  formik,
  helperTextContent,
  buttonLabel,
  buttonVariant,
  handleSubmit,
  fieldCount = 6,
  showButton = true,
}) => {
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

  const isButtonActive = Object.values(formik.values).every((val) => val !== '');

  return (
    <form onSubmit={handleSubmit || formik.handleSubmit} style={{ width: '100%' }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {[...Array(fieldCount)].map((_, index) => (
          <React.Fragment key={index}>
            <TextField
              type="text"
              variant="outlined"
              inputRef={(ele) => {
                inputRefs.current[index] = ele;
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
              value={formik.values[`text${index}`] ?? ''}
              inputProps={{ style: { textAlign: 'center' }, maxLength: 1 }}
            />
          </React.Fragment>
        ))}
      </Box>

      <FormHelperText>{helperTextContent}</FormHelperText>

      {showButton && (<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <ButtonDef
          variant={buttonVariant || 'contained'}
          onClick={handleSubmit || formik.handleSubmit}
          label={buttonLabel || 'modal.confirmation.btn_confirm'}
          disabled={!isButtonActive}
        />
      </Box>
      )
    }
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
};

export default ConfirmationForm;