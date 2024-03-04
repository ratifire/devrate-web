import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { styles } from './FormCheckbox.styles';
import React from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = ({ checked, changeHandler, name, label, helperText }) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={changeHandler} name={name} sx={styles.checkBox} />}
      label={<Typography sx={styles.newsAgreementText}>{label}</Typography>}
      helperText={helperText}
      FormHelperTextProps={styles.textHelper}
    />
  );
};

FormCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
};
FormCheckbox.defaultProps = {
  checked: false,
  changeHandler: null,
  name: '',
  label: '',
  helperText: '',
};

export default FormCheckbox;
