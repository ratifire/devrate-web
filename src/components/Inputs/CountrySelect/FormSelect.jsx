import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { styles } from './FormSelect.styles';
import { useTranslation } from 'react-i18next';

const FormSelect = ({
  variant,
  name,
  value,
  handleChange,
  handleBlur,
  label,
  error,
  helperText,
  countries,
  itemsText,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  return (
    <FormControl fullWidth variant={variant} sx={styles.input} error={error}>
      <InputLabel htmlFor={id}>{t(label)}</InputLabel>
      <Select
        id={id}
        name={name}
        value={value}
        label={t(label)}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        MenuProps={{
          sx: styles.menuPaper,
        }}
      >
        {countries.map(({ id, country }) => (
          <MenuItem key={id} value={country}>
            {t(`${itemsText}.${country}`)}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText id={id} sx={styles.textHelper}>
        {t(helperText)}
      </FormHelperText>
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
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
  itemsText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
FormSelect.defaultProps = {
  variant: 'outlined',
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  label: '',
  helperText: '',
  error: false,
  countries: [],
  itemsText: '',
};
export default FormSelect;
