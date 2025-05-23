import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CancelIcon from '@mui/icons-material/Cancel';
import { styles } from './ConfirmCode.styles';

const ConfirmCode = ({ formik, fieldCount = 6, inputRefs, isError, helperTextContent }) => {
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

    formik.validateForm();
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.formInput}>
        {[...Array(fieldCount)].map((_, index) => (
          <TextField
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            autoComplete='off'
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
              ...(isError && {
                '& .MuiOutlinedInput-root fieldset': {
                  borderColor: '#ED0E0E !important',
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
      {isError && (
        <Typography sx={styles.error}>
          <CancelIcon sx={styles.codeErrorIcon} />
          {helperTextContent}
        </Typography>
      )}
    </Box>
  );
};

ConfirmCode.propTypes = {
  isError: PropTypes.bool,
  helperTextContent: PropTypes.string,
  inputRefs: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired,
  fieldCount: PropTypes.number,
};

export default ConfirmCode;
