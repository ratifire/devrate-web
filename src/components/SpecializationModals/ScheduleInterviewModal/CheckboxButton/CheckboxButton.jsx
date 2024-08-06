import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import {styles} from './CheckboxButton.styles';

export const CheckboxButton = (props) => {
  return (
    <FormControlLabel
      sx={styles.wrapper}
      value="end"
      control={<Checkbox sx={styles.checkbox} value={props.value} checked={props.isChecked} onChange={() => props.onChange(props.value)} />}
      label={props.label}
      labelPlacement="end"
      className={props.isChecked ? 'active' : ''}
    />
  );
};

CheckboxButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}