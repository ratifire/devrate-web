import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { Box, FormControl, FormHelperText } from '@mui/material';
import { styles } from './AdvancedFormSelector.styles'; // Import styles // Import styles
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const AdvancedFormSelector = ({
  variant,
  name,
  required,
  handleBlur,
  handleChange,
  value,
  label,
  error,
  helperText,
  countries,
  helperDescription,
}) => {
  const id = uuid();
  const { t } = useTranslation();

  const handleChangeCountry = (event, value) => {
    handleChange(value);
  };

  return (
    <FormControl fullWidth variant={variant} error={error} sx={styles.wrapper}>
      <Autocomplete
        renderInput={(params) => (
          <TextField
            {...params}
            label={t(label)}
            error={error} // Ensure error prop is passed to TextField
            sx={styles.selectField}
            required={required}
          />
        )}
        disablePortal
        id={id}
        name={name}
        value={value}
        onChange={handleChangeCountry}
        onBlur={handleBlur}
        options={countries}
        sx={styles.autoComplete}
        PaperComponent={({ children }) => <Box sx={styles.dropdownPaper}>{children}</Box>}
        popupIcon={<KeyboardArrowDownIcon />}
      />
      {error && (
        <FormHelperText id={id} sx={styles.helperText}>
          {t(helperText)}
        </FormHelperText>
      )}
      {helperDescription && <FormHelperText id={id}>{t(helperDescription)}</FormHelperText>}
    </FormControl>
  );
};

AdvancedFormSelector.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  countries: PropTypes.array.isRequired,
  helperDescription: PropTypes.string,
};

AdvancedFormSelector.defaultProps = {
  countries: [],
  required: false,
  error: false,
  helperText: '',
  helperDescription: '',
};

export default AdvancedFormSelector;
