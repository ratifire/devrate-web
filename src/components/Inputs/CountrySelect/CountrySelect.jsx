import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styles } from './ContrySelect.styles';

const CountrySelect = ({ name, value, handleChange, handleBlur, label, error, helperText, countries, itemsText }) => {
  const id = uuid();
  const { t } = useTranslation();

  return (
    <FormControl fullWidth variant='outlined' sx={styles.input}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        helperText={helperText}
        FormHelperTextProps={styles.textHelper}
      >
        {countries.map(({ id, country }) => {
          return (
            <MenuItem key={id} value={country}>
              {t(`${itemsText}.${country}`)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

CountrySelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
  itemsText: PropTypes.string.isRequired,
};
CountrySelect.defaultProps = {
  name: '',
  value: '',
  handleChange: null,
  handleBlur: null,
  type: 'text',
  label: '',
  helperText: '',
  error: false,
  countries: [],
  itemsText: '',
};
export default CountrySelect;
