import * as React from 'react';
import PropTypes from 'prop-types';
import { styles } from './FormInput.styles';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuid } from 'uuid';
import PasswordVisibilityToggle from '../../PasswordVisibilityToggle';
import { useTranslation } from 'react-i18next';

const FormInput = ({
  name,
  value,
  type,
  handleChange,
  handleBlur,
  showPassword,
  label,
  placeholder,
  helperText,
  error,
  clickHandler,
  mouseDownHandler,
  iconStyle,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  return (
    <FormControl variant='outlined' sx={styles.inputWrapper} error={error}>
      <InputLabel htmlFor={id} sx={styles.label}>
        {t(label)}
      </InputLabel>
      <OutlinedInput
        sx={styles.input}
        autoComplete='off'
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={showPassword ? (showPassword ? 'text' : type) : type}
        label={t(label)}
        placeholder={t(placeholder)}
        endAdornment={
          type === 'password' && (
            <PasswordVisibilityToggle
              name={name}
              showPassword={showPassword}
              clickHandler={clickHandler}
              mouseDownHandler={mouseDownHandler}
              tooltip={true}
              textContent='modal.registration.password_tooltip'
              iconStyle={iconStyle}
            />
          )
        }
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
  placeholder: PropTypes.string,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func,
  mouseDownHandler: PropTypes.func,
  iconStyle: PropTypes.object,
};

FormInput.defaultProps = {
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  showPassword: false,
  type: 'text',
  label: '',
  placeholder: '',
  helperText: '',
  error: false,
  clickHandler: () => {},
  mouseDownHandler: () => {},
  iconStyle: {},
};

export default FormInput;
