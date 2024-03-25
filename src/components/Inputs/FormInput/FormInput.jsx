import * as React from 'react';
import PropTypes from 'prop-types';
import { styles } from './FormInput.styles';
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuid } from 'uuid';
import PasswordVisibilityToggle from '../../PasswordVisibilityToggle';
import { useTranslation } from 'react-i18next';

const FormInput = ({
  variant,
  name,
  value,
  type,
  handleChange,
  handleBlur,
  showPassword,
  label,
  helperText,
  error,
  clickHandler,
  mouseDownHandler,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  return (
    <FormControl variant={variant} sx={styles.input} error={error}>
      <InputLabel htmlFor={id}>{t(label)}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={showPassword ? (showPassword ? 'text' : type) : type}
        label={t(label)}
        endAdornment={
          type === 'password' && (
            <PasswordVisibilityToggle
              name={name}
              showPassword={showPassword}
              clickHandler={clickHandler}
              mouseDownHandler={mouseDownHandler}
              tooltip={true}
              textContent='modal.registration.password_tooltip'
            />
          )
        }
      />
      {
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperText)}
        </FormHelperText>
      }
    </FormControl>
  );
};
FormInput.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  showPassword: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func,
  mouseDownHandler: PropTypes.func,
};
FormInput.defaultProps = {
  variant: 'outlined',
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  showPassword: false,
  type: 'text',
  label: '',
  helperText: '',
  error: false,
  clickHandler: () => {},
  mouseDownHandler: () => {},
};

export default FormInput;
