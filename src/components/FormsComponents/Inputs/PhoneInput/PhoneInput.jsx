import 'react-international-phone/style.css';

import { InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import { defaultCountries, FlagImage, parseCountry, usePhoneInput } from 'react-international-phone';

// export const MuiPhone = ({ value, onChange, ...restProps }) => {
export const MuiPhone = ({ ...restProps }) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
    defaultCountry: 'us',
    // value,
    countries: defaultCountries,
    // onChange: (data) => {
    //   onChange(data.phone);
    // },
  });

  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position='start' style={{ marginRight: '2px', marginLeft: '-8px' }}>
            <Select
              MenuProps={{
                style: {
                  height: '300px',
                  width: '360px',
                  top: '-60px',
                  left: '-34px',
                },
                transformOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
              }}
              renderValue={(value) => <FlagImage iso2={value} style={{ display: 'flex' }} />}
              sx={{
                width: 'max-content',
                // Remove default outline (display only on focus)
                fieldset: {
                  display: 'none',
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: 'block',
                  },
                },
                // Update default spacing
                '.MuiSelect-select': {
                  padding: '8px',
                  paddingRight: '24px !important',
                },
                svg: {
                  right: 0,
                },
              }}
              value={country.iso2}
              onChange={(e) => setCountry(e.target.value)}
            >
              {defaultCountries.map((c) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagImage iso2={country.iso2} style={{ marginRight: '8px' }} />
                    <Typography marginRight='8px'>{country.name}</Typography>
                    <Typography color='gray'>+{country.dialCode}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      color='primary'
      inputRef={inputRef}
      label='Phone number'
      placeholder='Phone number'
      type='tel'
      value={inputValue}
      variant='outlined'
      onChange={handlePhoneValueChange}
      {...restProps}
    />
  );
};
