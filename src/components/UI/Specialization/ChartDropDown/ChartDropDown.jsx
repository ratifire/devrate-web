import { Box, MenuItem, Select } from '@mui/material';
import { styles } from './ChartDropDown.styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import PropTypes from 'prop-types';

const ChartDropDown = ({ months, days, handleChange }) => {
  return (
    <Box>
      <Select
        sx={styles.select}
        onChange={handleChange}
        defaultValue={'months'}
        IconComponent={KeyboardArrowDownIcon}
        inputProps={{
          MenuProps: {
            PaperProps: {
              sx: styles.dropdownPaper,
            },
          },
        }}
      >
        <MenuItem sx={styles.menuItem} value={'months'}>
          {months}
        </MenuItem>
        <MenuItem sx={styles.menuItem} value={'days'}>
          {days}
        </MenuItem>
      </Select>
    </Box>
  )
}

ChartDropDown.propTypes = {
  months: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default ChartDropDown;
