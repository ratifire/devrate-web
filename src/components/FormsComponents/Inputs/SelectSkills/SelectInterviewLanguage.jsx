import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { styles } from './SelectInterviewLanguage.styles';

const SelectInterviewLanguage = ({ languagesArray, variant, label, error, helperText, formik }) => {
  const id = uuid();
  const { t } = useTranslation();
  const language = formik.values.language;

  const handleChange = (event) => {
    formik.setValues({ ...formik.values, language: event.target.value });
  };

  return (
    <FormControl fullWidth error={error} sx={styles.wrapper} variant={variant}>
      <InputLabel htmlFor={id} sx={styles.label}>
        {label}
      </InputLabel>
      <Select
        required
        IconComponent={KeyboardArrowDownIcon}
        id={id}
        inputProps={{
          MenuProps: {
            sx: styles.selectField,
          },
        }}
        label={label}
        name='language'
        sx={styles.input}
        value={language}
        onChange={handleChange}
      >
        {languagesArray?.map(({ id, name }) => (
          <MenuItem key={id} sx={styles.menuItem} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperText)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

SelectInterviewLanguage.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  formik: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  languagesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default SelectInterviewLanguage;
