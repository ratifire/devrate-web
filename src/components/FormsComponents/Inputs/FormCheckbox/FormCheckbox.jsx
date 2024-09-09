import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';
import { styles } from './FormCheckbox.styles';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const FormCheckbox = ({ checked, changeHandler, name, label, helperText, error, workExperience }) => {
  const { t } = useTranslation();
  return (
    <FormControl error={error} variant='standard'>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={changeHandler} name={name} sx={workExperience? styles.checkBoxWorkExperience : styles.checkBox} />}
        label={<Typography sx={workExperience ? styles.newsAgreementTextWorkExperience : styles.newsAgreementText}>{t(label)}</Typography>}
      />
      <FormHelperText>{t(helperText)}</FormHelperText>
    </FormControl>
  );
};

FormCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  workExperience: PropTypes.bool
};
FormCheckbox.defaultProps = {
  checked: false,
  changeHandler: null,
  name: '',
  label: '',
  helperText: '',
  error: false,
};

export default FormCheckbox;
