import React from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { styles } from './TextAreaInput.styles';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import PropTypes from 'prop-types';

const TextAreaInput = ({ name, value, label, type, error, helperText, handleChange, placeholder }) => {
  const { t } = useTranslation();
  const id = uuid();

  return (
    <>
      <FormControl variant='outlined' sx={styles.input} error={error}>
        <TextField
          sx={styles.textareaBox}
          id={id}
          name={name}
          value={value}
          label={t(label)}
          placeholder={t(placeholder)}
          type={type}
          error={error}
          fullWidth
          multiline
          rows={6}
          onChange={handleChange}
        />
        {
          <FormHelperText id={id} sx={styles.textHelper}>
            {t(helperText)}
          </FormHelperText>
        }
      </FormControl>
    </>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TextAreaInput.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
  type: 'text',
  label: '',
  placeholder: '',
  helperText: '',
  error: false,
};

export default TextAreaInput;
