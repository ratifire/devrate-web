import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { styles } from './SelectInterviewLanguage.styles';

const SelectInterviewLanguage = ({ languagesArray, variant, label, error, helperText, defaultValue }) => {
  const id = uuid();
  const { t } = useTranslation();
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value); // Update the state with the new value
  };

  return (
    <FormControl fullWidth error={error} sx={styles.wrapper} variant={variant}>
      <InputLabel htmlFor={id} sx={styles.label}>
        {label}
      </InputLabel>
      <Select
        required
        IconComponent={KeyboardArrowDownIcon}
        id={id}
        inputProps={{
          MenuProps: {
            sx: styles.selectField,
          },
        }}
        label={label}
        name='language'
        sx={styles.input}
        value={value}
        onChange={handleChange}
      >
        {languagesArray?.map(({ id, name }) => (
          <MenuItem key={id} sx={styles.menuItem} value={id}>
            {name}
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

SelectInterviewLanguage.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  languagesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  defaultValue: PropTypes.string,
};

export default SelectInterviewLanguage;
