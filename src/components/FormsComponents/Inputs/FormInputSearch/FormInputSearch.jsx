import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import Loupe from '@assets/icons/loupe.svg?react';
import { styles } from './FormInputSearch.styles.js';

const FormInputSearch = ({ sx, ...props }) => {
  const style = { ...styles.input, ...sx };

  return (
    <OutlinedInput
      {...props}
      endAdornment={
        <InputAdornment position='end'>
          <IconButton edge='end'>
            <Loupe />
          </IconButton>
        </InputAdornment>
      }
      sx={style}
    />
  );
};

FormInputSearch.propTypes = {
  sx: PropTypes.object,
};

export default FormInputSearch;
