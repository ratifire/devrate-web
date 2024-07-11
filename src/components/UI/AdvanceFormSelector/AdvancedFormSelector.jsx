import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText } from '@mui/material';
import { styles } from '../../Inputs/CountrySelect/FormSelect.styles';
import PropTypes from 'prop-types';

const AdvancedFormSelector = ({
  variant,
  name,
  value,
  handleChange,
  handleBlur,
  label,
  error,
  helperText,
  countries,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  return (
    <FormControl fullWidth variant={variant}>
    <Autocomplete
      disablePortal
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      sx={{ width: '100' }}
      options={countries}
      renderInput={(params) => <TextField {...params} label={t(label)} />}
    />

      {error && (
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperText)}
        </FormHelperText>
      )}
    </FormControl>
  );
}

AdvancedFormSelector.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
};

export default AdvancedFormSelector;