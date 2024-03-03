import * as React from 'react';
import PropTypes from 'prop-types';
import { styles } from './InputPassword.styles';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuid } from 'uuid';
import PasswordVisibilityToggle from '../../PasswordVisibilityToggle/PasswordVisibilityToggle';

const InputPassword = ({
  name,
  value,
  handleChange,
  handleBlur,
  type,
  label,
  helperText,
  error,
  toolTipOn,
  toolTipText,
}) => {
  const id = uuid();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  return (
    <FormControl variant='outlined' sx={styles.input} error={error}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={showPassword ? 'text' : type}
        label={label}
        endAdornment={
          <PasswordVisibilityToggle
            showPassword={showPassword}
            clickHandler={handleClickShowPassword}
            mouseDownHandler={handleMouseDownPassword}
            tooltip={toolTipOn}
            textContent={toolTipText}
          />
        }
      />
      <FormHelperText id={id + 'inp-text'} sx={styles.textHelper}>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};
InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  toolTipOn: PropTypes.bool,
  toolTipText: PropTypes.string,
};
InputPassword.defaultProps = {
  name: '',
  value: '',
  handleChange: null,
  handleBlur: null,
  type: 'password',
  label: '',
  helperText: '',
  error: false,
};

export default InputPassword;
