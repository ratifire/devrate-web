import PropTypes from 'prop-types';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const PasswordVisibilityToggle = ({ showPassword, clickHandler, mouseDownHandler, iconStyle }) => {
  return (
    <>
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          edge='end'
          onClick={clickHandler}
          onMouseDown={mouseDownHandler}
        >
          {showPassword ? <VisibilityOutlinedIcon sx={iconStyle} /> : <VisibilityOffOutlinedIcon sx={iconStyle} />}
        </IconButton>
      </InputAdornment>
    </>
  );
};

PasswordVisibilityToggle.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  mouseDownHandler: PropTypes.func.isRequired,
  tooltip: PropTypes.bool.isRequired,
  textContent: PropTypes.string,
  iconStyle: PropTypes.object,
};

PasswordVisibilityToggle.defaultProps = {
  showPassword: false,
  clickHandler: () => {},
  mouseDownHandler: () => {},
  tooltip: false,
  textContent: '',
  iconStyle: {},
};

export default PasswordVisibilityToggle;
