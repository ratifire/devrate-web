import 'react-international-phone/style.css';

import { FormControl, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import { defaultCountries, FlagImage, parseCountry, usePhoneInput } from 'react-international-phone';
import { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styles } from './PhoneInput.styles.js';
import PhoneHelperText from './PhoneHelperText/index.js';

const MuiPhone = ({
  value,
  onChange,
  handleBlur,
  placeholder,
  error,
  helperText,
  label = 'profile.modal.userInfo.contact.phone',
  defaultCountry = 'ua',
  ...restProps
}) => {
  const id = useMemo(() => uuid(), []);
  const { t } = useTranslation();

  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
    defaultCountry,
    value,
    countries: defaultCountries,
    onChange: (data) => {
      onChange(data.phone, country.iso2);
    },
  });

  return (
    <FormControl error={error} sx={styles.inputWrapper} variant='outlined'>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position={'start'}>
              <Select
                IconComponent={KeyboardArrowDownIcon}
                inputProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: styles.dropdownPaper,
                    },
                    sx: styles.selectField,
                  },
                }}
                renderValue={(value) => <FlagImage iso2={value} />}
                sx={styles.select}
                value={country.iso2}
                onChange={(e) => setCountry(e.target.value)}
              >
                {defaultCountries.map((c) => {
                  const country = parseCountry(c);
                  return (
                    <MenuItem key={country.iso2} sx={styles.menuItem} value={country.iso2}>
                      <FlagImage iso2={country.iso2} style={styles.flagImage} />
                      <Typography sx={styles.countryName}>{country.name}</Typography>
                      <Typography sx={styles.dialCode}>+{country.dialCode}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          ),
        }}
        error={error}
        id={id}
        inputRef={inputRef}
        label={t(label)}
        placeholder={t(placeholder)}
        sx={styles.textField}
        type='tel'
        value={inputValue}
        variant='outlined'
        onBlur={() => {
          handleBlur({ target: { name: 'phone' } });
        }}
        onChange={handlePhoneValueChange}
        {...restProps}
      />

      <PhoneHelperText error={error} helperText={helperText} id={id} />
    </FormControl>
  );
};

MuiPhone.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  defaultCountry: PropTypes.string,
  placeholder: PropTypes.string,
};

MuiPhone.defaultProps = {
  value: '',
  onChange: () => {},
  handleBlur: () => {},
  error: false,
  helperText: '',
  label: 'profile.modal.userInfo.contact.phone',
  placeholder: 'profile.modal.userInfo.contact.phone',
  required: false,
  defaultCountry: 'ua',
};

export default MuiPhone;
