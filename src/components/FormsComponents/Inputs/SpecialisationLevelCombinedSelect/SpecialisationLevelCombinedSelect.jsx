import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import { styles } from './SpecialisationLevelCombinedSelect.styles';

const SpecialisationLevelCombinedSelect = ({
  variant,
  name,
  value,
  handleChange,
  handleBlur,
  label,
  required,
  error,
  helperText,
  arrayObj,
  disabled,
}) => {
  const id = uuid();
  const { t } = useTranslation();

  return (
    <FormControl fullWidth disabled={disabled} error={error} sx={styles.wrapper} variant={variant}>
      <InputLabel htmlFor={id} required={required} sx={styles.label}>
        {label}
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
        label={label}
        name={name}
        sx={styles.input}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      >
        {arrayObj?.map(({ name, mainMasteryLevel, mainMasteryId, main }) => (
          <MenuItem key={mainMasteryId} sx={styles.menuItem} value={mainMasteryId}>
            {`${mainMasteryLevel} ${name}`} {main && <StarIcon sx={styles.icon} />}
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

SpecialisationLevelCombinedSelect.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  arrayObj: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
};
SpecialisationLevelCombinedSelect.defaultProps = {
  variant: 'outlined',
  name: '',
  value: '',
  handleChange: () => {},
  handleBlur: () => {},
  label: '',
  required: false,
  helperText: '',
  error: false,
  arrayObj: [],
};
export default SpecialisationLevelCombinedSelect;
