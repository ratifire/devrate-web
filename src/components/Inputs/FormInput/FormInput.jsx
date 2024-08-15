import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuid } from 'uuid';
import PasswordVisibilityToggle from '../../PasswordVisibilityToggle';
import { useTranslation } from 'react-i18next';
import { styles } from './FormInput.styles';

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
    <FormControl variant='outlined' sx={styles.inputWrapper} error={error}>
      <InputLabel htmlFor={id} sx={styles.label} required={required}>
        {t(label)}
      </InputLabel>
      <OutlinedInput
        sx={styles.input}
        autoComplete={autoComplete}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={showPassword ? 'text' : type}
        label={t(label)}
        placeholder={t(placeholder)}
        inputRef={inputRef}
        endAdornment={
          type === 'password' && (
            <PasswordVisibilityToggle
              name={name}
              showPassword={showPassword}
              clickHandler={handleTogglePasswordVisibility}
              mouseDownHandler={mouseDownHandler}
              tooltip={true}
              textContent='modal.registration.password_tooltip'
              iconStyle={iconStyle}
            />
          )
        }
        {...extraProps}
      />
      {error && (
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperText)}
        </FormHelperText>
      )}
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
  iconStyle: PropTypes.object,
  autoComplete: PropTypes.string,
  extraProps: PropTypes.object,
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
};

export default FormInput;