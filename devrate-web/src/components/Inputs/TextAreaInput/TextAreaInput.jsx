import React from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { styles } from './TextAreaInput.styles';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import PropTypes from 'prop-types';

const TextAreaInput = ({ name, value, label, placeholder, type, error, helperText, handleChange, handleBlur }) => {
  const { t } = useTranslation();
  const id = uuid();

  return (
    <>
      <FormControl variant='outlined' sx={styles.textareaBox} error={error}>
        <InputLabel htmlFor={id} sx={styles.label}>
          {t(label)}
        </InputLabel>
        <OutlinedInput
          sx={styles.input}
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
          onBlur={handleBlur}
        />
        {error && (
          <FormHelperText id={id} sx={styles.textHelper}>
            {t(helperText)}
          </FormHelperText>
        )}
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
  handleBlur: PropTypes.func.isRequired,
};

TextAreaInput.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  type: 'text',
  label: '',
  placeholder: '',
  helperText: '',
  error: false,
};

export default TextAreaInput;