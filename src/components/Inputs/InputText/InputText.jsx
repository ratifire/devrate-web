import { styles } from './InputText.styles';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ id, name, value, handleChange, handleBlur, type, label, helperText, error }) => {
  return (
    <FormControl variant='outlined' sx={styles.input} error={error}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        label={label}
      />
      <FormHelperText id='component-error-text' sx={styles.textHelper}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};
InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};
InputText.defaultProps = {
  id: '',
  name: '',
  value: '',
  handleChange: null,
  handleBlur: null,
  type: 'text',
  label: '',
  helperText: '',
  error: false,
};

export default InputText;
