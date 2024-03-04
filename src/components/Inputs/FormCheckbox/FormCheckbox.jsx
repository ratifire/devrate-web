import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { styles } from './FormCheckbox.styles';
import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../InputText';

const FormCheckbox = ({ checked, changeHandler, name, label, helperText }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={changeHandler}
          name={name}
          sx={{
            color: '#F1F1F1',
            '&.Mui-checked': {
              color: '#F1F1F1',
            },
          }}
        />
      }
      label={<Typography sx={styles.newsAgreementText}>{label}</Typography>}
      helperText={helperText}
      FormHelperTextProps={{
        sx: { position: 'absolute', bottom: '-20px' },
      }}
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
InputText.defaultProps = {
  checked: false,
  changeHandler: null,
  name: '',
  label: '',
  helperText: '',
};

export default FormCheckbox;
