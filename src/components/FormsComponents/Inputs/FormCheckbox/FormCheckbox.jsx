import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CustomCheckboxIcon, CustomCheckedIcon } from '@components/UI/CustomCheckbox/CustomCheckbox';
import { styles } from './FormCheckbox.styles';

const FormCheckbox = ({ checked, changeHandler, name, label, helperText, error, workExperience, isLink }) => {
  const { t } = useTranslation();

  const textStyles = workExperience ? styles.newsAgreementTextWorkExperience : styles.newsAgreementText;
  const labelContent = isLink ? label : t(label);

  return (
    <FormControl error={error} variant='standard'>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            checkedIcon={<CustomCheckedIcon />}
            icon={<CustomCheckboxIcon />}
            name={name}
            onChange={changeHandler}
          />
        }
        label={<Typography sx={textStyles}>{labelContent}</Typography>}
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
  workExperience: PropTypes.bool,
  isLink: PropTypes.bool,
};

FormCheckbox.defaultProps = {
  checked: false,
  changeHandler: null,
  name: '',
  label: '',
  helperText: '',
  error: false,
  isLink: false,
};

export default FormCheckbox;
