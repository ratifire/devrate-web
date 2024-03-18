import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { styles } from './FormSelect.styles';
import OptionsList from './OptionsList';
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
    <FormControl fullWidth variant={variant} sx={styles.input}>
      <InputLabel htmlFor={id}>{t(label)}</InputLabel>
      <Select
        id={id}
        name={name}
        value={value}
        label={t(label)}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        helperText={helperText}
        FormHelperTextProps={styles.textHelper}
      >
        <OptionsList data={countries} text={itemsText} />
      </Select>
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
  itemsText: PropTypes.string.isRequired,
};
FormSelect.defaultProps = {
  variant: 'outlined',
  name: '',
  value: '',
  handleChange: null,
  handleBlur: null,
  label: '',
  helperText: '',
  error: false,
  countries: [],
  itemsText: '',
};
export default FormSelect;
