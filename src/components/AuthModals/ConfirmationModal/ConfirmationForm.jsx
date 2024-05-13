import React from 'react';
import PropTypes from 'prop-types';
import { Box, FormHelperText, TextField } from '@mui/material';
import { ButtonDef } from '../../Buttons';
import styles from './ConfirmationModal.styles';

const ConfirmationForm = ({ inputRefs, formik, helperTextContent }) => {

  const handleKeyDown = (event, index) => {
    const { key } = event;

    if ((key >= '0' && key <= '9') || key === 'Backspace' || key === 'Delete') {
      const { value } = event.target;

      // Проверяем, есть ли уже символ в поле ввода
      if (value.length === 0 || (value.length === 1 && (key === 'Backspace' || key === 'Delete'))) {
        if (key >= '0' && key <= '9') {
          event.preventDefault();
          const newValue = value + key;
          formik.setFieldValue(`text${index}`, newValue);

          // Переходим к следующему полю, если оно существует и не заполнено
          if (index < 5 && !formik.values[`text${index + 1}`]) {
            inputRefs.current[index + 1].focus();
          }
        } else if (key === 'Backspace' && index > 0) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index - 1].focus();
        } else if (key === 'Delete' && index < 5) {
          event.preventDefault();
          formik.setFieldValue(`text${index}`, '');
          inputRefs.current[index + 1].focus();
        }
      } else {
        event.preventDefault(); // Предотвращаем вставку символа, если поле ввода уже заполнено
      }
    } else {
      event.preventDefault(); // Предотвращаем стандартное поведение для всех остальных клавиш
    }
  };

  const isButtonActive = Object.values(formik.values).every((val) => val !== '');

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {[...Array(6)].map((_, index) => (
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

      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          variant='contained'
          onClick={formik.handleSubmit}
          label='modal.confirmation.btn_confirm'
          disabled={!isButtonActive}
        />
      </Box>
    </form>
  );
};

ConfirmationForm.propTypes = {
  inputRefs: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired,
  isButtonActive: PropTypes.bool.isRequired,
  helperTextContent: PropTypes.string,
};

export default ConfirmationForm;
