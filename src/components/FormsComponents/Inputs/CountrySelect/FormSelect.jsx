import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { styles } from './FormSelect.styles';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FormSelect = ({
  variant,
  name,
  value,
  handleChange,
  handleBlur,
  label,
  required,
  error,
  helperText,
  countries,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  return (
    <FormControl fullWidth variant={variant} sx={styles.wrapper} error={error}>
      <InputLabel htmlFor={id} sx={styles.label} required={required}>
        {t(label)}
      </InputLabel>
      <Select
        sx={styles.input}
        id={id}
        name={name}
        value={value}
        label={t(label)}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        IconComponent={KeyboardArrowDownIcon}
        inputProps={{
          MenuProps: {
            PaperProps: {
              sx: styles.dropdownPaper,
            },
            sx: styles.selectField,
          },
        }}
      >
        {countries.map((country, index ) => (
          <MenuItem key={index} value={country} sx={styles.menuItem}>
            {country}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperText)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormSelect.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
};
FormSelect.defaultProps = {
  variant: 'outlined',
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  label: '',
  required: false,
  helperText: '',
  error: false,
  countries: [],
};
export default FormSelect;