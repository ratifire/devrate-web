// PasswordVisibilityToggle.js
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { IconButton, InputAdornment, Tooltip, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styles from './PasswordVisibilityToggle.styles';

const PasswordVisibilityToggle = ({
  name,
  showPassword,
  clickHandler,
  mouseDownHandler,
  tooltip,
  textContent,
  iconStyle,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={clickHandler}
          onMouseDown={mouseDownHandler}
          edge='end'
          sx={{ marginRight: name !== 'repeatPassword' ? '-12px' : 0 }}
        >
          {showPassword ? <VisibilityOff sx={iconStyle} /> : <Visibility sx={iconStyle} />}
        </IconButton>
      </InputAdornment>
      {tooltip && name !== 'repeatPassword' && (
        <InputAdornment position='end'>
          <Tooltip title={<Typography sx={styles.tooltip}>{t(textContent)}</Typography>}>
            <IconButton sx={{ marginRight: 0 }}>
              <InfoOutlinedIcon sx={iconStyle} />
            </IconButton>
          </Tooltip>
        </InputAdornment>
      )}
    </>
  );
};

PasswordVisibilityToggle.propTypes = {
  name: PropTypes.string,
  showPassword: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  mouseDownHandler: PropTypes.func.isRequired,
  tooltip: PropTypes.bool.isRequired,
  textContent: PropTypes.string,
  iconStyle: PropTypes.object,
};

PasswordVisibilityToggle.defaultProps = {
  name: '',
  showPassword: false,
  clickHandler: () => {},
  mouseDownHandler: () => {},
  tooltip: false,
  textContent: '',
  iconStyle: {},
};

export default PasswordVisibilityToggle;
