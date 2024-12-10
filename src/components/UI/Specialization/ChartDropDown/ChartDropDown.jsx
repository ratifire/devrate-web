import { Box, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { styles } from './ChartDropDown.styles';

const ChartDropDown = ({ months, days, handleChange }) => {
  return (
    <Box>
      <Select
        IconComponent={KeyboardArrowDownIcon}
        defaultValue={'months'}
        inputProps={{
          MenuProps: {
            PaperProps: {
              sx: styles.dropdownPaper,
            },
          },
        }}
        sx={styles.select}
        onChange={handleChange}
      >
        <MenuItem sx={styles.menuItem} value={'months'}>
          {months}
        </MenuItem>
        <MenuItem sx={styles.menuItem} value={'days'}>
          {days}
        </MenuItem>
      </Select>
    </Box>
  );
};

ChartDropDown.propTypes = {
  months: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ChartDropDown;
