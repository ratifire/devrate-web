import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';

const ResetPasswordForm = ({ inputRefs, fieldCount = 6, handleCodeChange }) => {
  const [inputValues, setInputValues] = useState(Array(fieldCount).fill(''));

  const handleKeyDown = (event, index) => {
    const { key } = event;

    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      const { value } = event.target;

      if (value.length === 0 || (value.length === 1 && (key === 'Backspace' || key === 'Delete'))) {
        if (key >= '0' && key <= '9') {
          event.preventDefault();
          const newValues = [...inputValues];
          newValues[index] = value + key;
          setInputValues(newValues);

          if (index < fieldCount - 1 && !inputValues[index + 1]) {
            inputRefs.current[index + 1].focus();
          }
        } else if (key === 'Backspace' && index > 0) {
          event.preventDefault();
          const newValues = [...inputValues];
          newValues[index] = '';
          setInputValues(newValues);
          inputRefs.current[index - 1].focus();
        } else if (key === 'Delete' && index < fieldCount - 1) {
          event.preventDefault();
          const newValues = [...inputValues];
          newValues[index] = '';
          setInputValues(newValues);
          inputRefs.current[index + 1].focus();
        }
      } else {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  };

  React.useEffect(() => {
    const code = inputValues.join('');
    if (code !== handleCodeChange(code)) {
      handleCodeChange(code);
    }
  }, [inputValues, handleCodeChange]);

  return (
    <form autoComplete="off" style={{ width: '100%' }}>
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
              value={inputValues[index]}
              inputProps={{ style: { textAlign: 'center' }, maxLength: 1 }}
            />
          </React.Fragment>
        ))}
      </Box>
    </form>
  );
};
ResetPasswordForm.propTypes = {
  inputRefs: PropTypes.object.isRequired,
  fieldCount: PropTypes.number,
  handleCodeChange: PropTypes.func.isRequired,
};

export default ResetPasswordForm;
