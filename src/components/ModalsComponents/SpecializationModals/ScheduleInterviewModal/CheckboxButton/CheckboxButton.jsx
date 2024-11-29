import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { styles } from './CheckboxButton.styles';

export const CheckboxButton = ({ label, value, isChecked, onChange, disabled }) => {
  return (
    <FormControlLabel
      className={isChecked ? 'active' : ''}
      control={
        <Checkbox
          checked={isChecked}
          disabled={disabled}
          sx={styles.checkbox}
          value={value}
          onChange={() => onChange(value)}
        />
      }
      label={<Typography>{label}</Typography>}
      labelPlacement='end'
      sx={disabled ? styles.wrapperDisabled : styles.wrapper}
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
