import React from 'react';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { styles } from './TextAreaInput.styles';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';

import PropTypes from 'prop-types';

const TextAreaInput = ({ name, value, label, type, error, helperText, handleChange }) => {
  const { t } = useTranslation();
  const id = uuid();

  return (
    //TODO create storybook for this component
    <>
      <FormControl variant='outlined' sx={styles.input} error={error}>
        <TextField
          sx={styles.textareaBox}
          id={id}
          name={name}
          value={value}
          label={t(label)}
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
}

TextAreaInput.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
  type: 'text',
  label: '',
  helperText: '',
  error: false,
};

export default TextAreaInput;

