import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { styles } from './SelectSkills.styles';

const SelectSkills = ({
  variant,
  handleLanguageChange,
  labelLanguage,
  errorLanguage,
  helperTextLanguage,
  selectedLanguage,
}) => {
  const id = uuid();
  const { t } = useTranslation();

  // Hardcoded list of popular programming languages
  const languagesArray = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'csharp', name: 'C#' },
    { id: 'cpp', name: 'C++' },
    { id: 'ruby', name: 'Ruby' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'php', name: 'PHP' },
    { id: 'swift', name: 'Swift' },
    { id: 'go', name: 'Go' },
  ];

  const handleLanguageSelectChange = (event) => {
    const selectedLang = event.target.value;
    handleLanguageChange(selectedLang);
  };

  return (
    <FormControl fullWidth error={errorLanguage} sx={styles.wrapper} variant={variant}>
      <InputLabel htmlFor={id} sx={styles.label}>
        {t(labelLanguage)}
      </InputLabel>
      <Select
        IconComponent={KeyboardArrowDownIcon}
        id={id}
        inputProps={{
          MenuProps: {
            sx: styles.selectField,
          },
        }}
        label={t(labelLanguage)}
        name='language'
        sx={styles.input}
        value={selectedLanguage}
        onChange={handleLanguageSelectChange}
      >
        {languagesArray.map(({ id, name }) => (
          <MenuItem key={id} sx={styles.menuItem} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      {errorLanguage && (
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperTextLanguage)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

SelectSkills.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  labelLanguage: PropTypes.string.isRequired,
  errorLanguage: PropTypes.bool.isRequired,
  helperTextLanguage: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string,
};

export default SelectSkills;
