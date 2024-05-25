import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styles } from './SelectLanguage.styles';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';

const SelectLanguage = ({
  variant,
  handleLanguageChange,
  handleLevelChange,
  labelLanguage,
  labelLevel,
  errorLanguage,
  errorLevel,
  helperTextLanguage,
  helperTextLevel,
  data,
}) => {
  const id = uuid();
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLanguageSelectChange = (event) => {
    const selectedLang = event.target.value;
    setSelectedLevel('');
    setSelectedLanguage(selectedLang);
    handleLanguageChange(selectedLang);
  };

  const handleLevelSelectChange = (event) => {
    const selectedLvl = event.target.value;
    setSelectedLevel(selectedLvl);
    handleLevelChange(selectedLvl);
  };

  const levels = data.find((lang) => lang.name === selectedLanguage)?.levels || [];

  return (
    <>
      <FormControl fullWidth variant={variant} sx={styles.input} error={errorLanguage}>
        <InputLabel htmlFor={id}>{t(labelLanguage)}</InputLabel>
        <Select
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
          {data.map(({ id, name }) => (
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
      <FormControl fullWidth variant={variant} sx={styles.input} error={errorLevel} disabled={!selectedLanguage}>
        <InputLabel htmlFor={`${id}-level`}>{t(labelLevel)}</InputLabel>
        <Select
          id={`${id}-level`}
          name='languageLevel'
          value={selectedLevel}
          label={t(labelLevel)}
          onChange={handleLevelSelectChange}
          IconComponent={KeyboardArrowDownIcon}
          inputProps={{
            MenuProps: {
              sx: styles.selectField,
            },
          }}
        >
          {levels.map(({ id, level }) => (
            <MenuItem key={id} value={level} sx={styles.menuItem}>
              {level}
            </MenuItem>
          ))}
        </Select>
        {errorLevel && (
          <FormHelperText id={`${id}-level`} sx={styles.textHelper}>
            {t(helperTextLevel)}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
};

SelectLanguage.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']).isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleLevelChange: PropTypes.func.isRequired,
  labelLanguage: PropTypes.string.isRequired,
  labelLevel: PropTypes.string.isRequired,
  errorLanguage: PropTypes.bool.isRequired,
  errorLevel: PropTypes.bool.isRequired,
  helperTextLanguage: PropTypes.string.isRequired,
  helperTextLevel: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default SelectLanguage;
