import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, FormControl, FormHelperText } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import { styles } from './CountryFormSelector.styles.js';

const CountryFormSelector = ({
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
}) => {
  const id = uuid();
  const { t } = useTranslation();

  const handleChangeCountry = (event, value) => {
    handleChange({
      target: {
        name: name,
        value: value || '',
      },
    });
  };

  const handleBlurCountry = () => {
    handleBlur({
      target: {
        name: name,
        value: value,
      },
    });
  };

  const handleOptionLabel = (option) => {
    if (!option || option === '') {
      return t(label);
    }
    if (typeof option === 'string') {
      return t(`countriesList.${option}`);
    }
    if (option.target.value) {
      return t(`countriesList.${option.target.value}`);
    }
    return '';
  };

  return (
    <FormControl fullWidth error={error} sx={styles.wrapper} variant={variant}>
      <Autocomplete
        disablePortal
        forcePopupIcon // Hides the warning from the MUI, adds the dropdown icon
        freeSolo // Hides the warning from the MUI
        PaperComponent={({ children }) => <Box sx={styles.dropdownPaper}>{children}</Box>}
        getOptionLabel={(option) => handleOptionLabel(option)}
        id={id}
        isOptionEqualToValue={(option, value) => option === value}
        name={name}
        options={countries}
        popupIcon={<KeyboardArrowDownIcon sx={styles.icon} />}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error} // Ensure error prop is passed to TextField
            label={t(label)}
            required={required}
            sx={styles.selectField}
          />
        )}
        sx={styles.autoComplete}
        value={value}
        onBlur={handleBlurCountry}
        onChange={handleChangeCountry}
      />
      {error && (
        <FormHelperText id={id} sx={styles.helperText}>
          {t(helperText)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

CountryFormSelector.propTypes = {
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
};

CountryFormSelector.defaultProps = {
  countries: [],
  required: false,
  error: false,
  helperText: '',
};

export default CountryFormSelector;
