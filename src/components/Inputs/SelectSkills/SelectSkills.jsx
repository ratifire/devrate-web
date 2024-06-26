import React from 'react';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styles } from './SelectSkills.styles';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';

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
    <FormControl fullWidth variant={variant} sx={styles.wrapper} error={errorLanguage}>
      <InputLabel htmlFor={id} sx={styles.label}>
        {t(labelLanguage)}
      </InputLabel>
      <Select
        sx={styles.input}
        id={id}
        name='language'
        value={selectedLanguage}
        label={t(labelLanguage)}
        onChange={handleLanguageSelectChange}
        IconComponent={KeyboardArrowDownIcon}
        inputProps={{
          MenuProps: {
            sx: styles.selectField,
          },
        }}
      >
        {languagesArray.map(({ id, name }) => (
          <MenuItem key={id} value={name} sx={styles.menuItem}>
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
