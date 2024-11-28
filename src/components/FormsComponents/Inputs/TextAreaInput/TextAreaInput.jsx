import React from 'react';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import PropTypes from 'prop-types';
import { styles } from './TextAreaInput.styles';

const TextAreaInput = ({
  name,
  value,
  label,
  required,
  rows,
  placeholder,
  type,
  error,
  helperText,
  handleChange,
  handleBlur,
}) => {
  const { t } = useTranslation();
  const id = uuid();

  return (
    <>
      <FormControl error={error} sx={styles.textareaBox} variant='outlined'>
        <InputLabel htmlFor={id} required={required} sx={styles.label}>
          {t(label)}
        </InputLabel>
        <OutlinedInput
          fullWidth
          multiline
          error={error}
          id={id}
          label={t(label)}
          name={name}
          placeholder={t(placeholder)}
          rows={rows}
          sx={styles.input}
          type={type}
          value={value}
          onBlur={handleBlur}
          onChange={handleChange}
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
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  rows: PropTypes.number,
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
  rows: 6,
  required: false,
  placeholder: '',
  helperText: '',
  error: false,
};

export default TextAreaInput;
