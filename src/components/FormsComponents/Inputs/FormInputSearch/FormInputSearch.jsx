import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import Loupe from '@assets/icons/loupe.svg?react';
import { useTheme } from '@mui/material/styles';

const FormInputSearch = ({ sx, ...props }) => {
  const theme = useTheme();
  const style = {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.modals.inputs.border.focused,
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-input + .MuiInputAdornment-root svg path': {
      fill: theme.palette.search.inputActive,
    },
    ...sx,
  };
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
