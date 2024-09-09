import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './CheckboxButton.styles';

export const CheckboxButton = ({
                                 label,
                                 value,
                                 isChecked,
                                 onChange,
                                 disabled,
                               }) => {
  return (
    <FormControlLabel
      sx={disabled ? styles.wrapperDisabled : styles.wrapper}
      control={
        <Checkbox
          sx={styles.checkbox}
          value={value}
          checked={isChecked}
          onChange={() => onChange(value)}
          disabled={disabled}
        />
      }
      label={
        <Typography
          sx={disabled ? styles.labelDisabled : styles.label}
        >
          {label}
        </Typography>
      }
      labelPlacement="end"
      className={isChecked ? 'active' : ''}
    />
  );
};

CheckboxButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
