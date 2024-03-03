import { useTranslation } from 'react-i18next';
import { IconButton, InputAdornment, Tooltip, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../PasswordVisibilityToggle/PasswordVisibilityToggle.styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React from 'react';
import PropTypes from 'prop-types';

export const PasswordVisibilityToggle = ({ showPassword, clickHandler, mouseDownHandler, tooltip, textContent }) => {
  const { t } = useTranslation();

  return (
    <>
      <InputAdornment position='end'>
        <IconButton
          aria-label='toggle password visibility'
          onClick={clickHandler}
          onMouseDown={mouseDownHandler}
          edge='end'
          sx={{ marginRight: -12 }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
      {tooltip && (
        <InputAdornment position='end'>
          <Tooltip title={<Typography sx={styles.tooltip}>{t(textContent)}</Typography>}>
            <IconButton sx={{ marginRight: 0 }}>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </InputAdornment>
      )}
    </>
  );
};

PasswordVisibilityToggle.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  mouseDownHandler: PropTypes.func.isRequired,
  tooltip: PropTypes.bool.isRequired,
  textContent: PropTypes.string,
};
