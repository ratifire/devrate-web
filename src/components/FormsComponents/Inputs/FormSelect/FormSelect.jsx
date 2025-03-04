import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styles } from './FormSelect.styles';

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
  disabled,
  isTranslated,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  return (
    <FormControl fullWidth disabled={disabled} error={error} sx={styles.wrapper} variant={variant}>
      <InputLabel htmlFor={id} required={required} sx={styles.label}>
        {t(label)}
      </InputLabel>
      <Select
        IconComponent={KeyboardArrowDownIcon}
        error={error}
        id={id}
        inputProps={{
          MenuProps: {
            PaperProps: {
              sx: styles.dropdownPaper,
            },
            sx: styles.selectField,
          },
        }}
        label={t(label)}
        name={name}
        sx={styles.input}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      >
        {countries.map((country) => (
          <MenuItem key={country} sx={styles.menuItem} value={country}>
            {isTranslated ? t(`modal.feedbackProjectModal.type_of_feedback.${country}`) : country}
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
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  countries: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  isTranslated: PropTypes.bool,
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
  isTranslated: false,
};
export default FormSelect;
