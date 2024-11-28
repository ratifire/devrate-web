import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import PasswordVisibilityToggle from '../../PasswordVisibilityToggle';
import { styles } from './FormInput.styles';
import HelperTextComponent from './FormHelperText';

const FormInput = ({
  name,
  value,
  type,
  handleChange,
  handleBlur,
  showPassword,
  label,
  required,
  placeholder,
  helperText,
  error,
  clickHandler,
  mouseDownHandler,
  iconStyle,
  autoComplete,
  extraProps,
  signupPassword,
  handleKeyDown,
}) => {
  const id = useMemo(() => uuid(), []);
  const { t } = useTranslation();
  const inputRef = useRef();

  const handleTogglePasswordVisibility = () => {
    const cursorPosition = inputRef.current.selectionStart;
    clickHandler();
    setTimeout(() => {
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
  };

  return (
    <FormControl error={error} sx={styles.inputWrapper} variant='outlined'>
      <InputLabel htmlFor={id} required={required} sx={styles.label}>
        {t(label)}
      </InputLabel>
      <OutlinedInput
        autoComplete={autoComplete}
        endAdornment={
          type === 'password' && (
            <PasswordVisibilityToggle
              clickHandler={handleTogglePasswordVisibility}
              iconStyle={iconStyle}
              mouseDownHandler={mouseDownHandler}
              name={name}
              showPassword={showPassword}
            />
          )
        }
        id={id}
        inputRef={inputRef}
        label={t(label)}
        name={name}
        placeholder={t(placeholder)}
        sx={styles.input}
        type={showPassword ? 'text' : type}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...extraProps}
      />

      <HelperTextComponent error={error} helperText={helperText} id={id} signupPassword={signupPassword} />
    </FormControl>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  showPassword: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func,
  mouseDownHandler: PropTypes.func,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  autoComplete: PropTypes.string,
  extraProps: PropTypes.object,
  signupPassword: PropTypes.bool,
  handleKeyDown: PropTypes.func,
};

FormInput.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  showPassword: false,
  type: 'text',
  label: '',
  required: false,
  placeholder: '',
  helperText: '',
  error: false,
  clickHandler: () => {},
  mouseDownHandler: () => {},
  iconStyle: {},
  autoComplete: 'off',
  extraProps: {},
  signupPassword: false,
};

export default FormInput;
