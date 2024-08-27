import React from 'react';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styles } from './SelectLanguage.styles';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import {
  useGetDefLanguageLevelQuery,
  useGetDefLanguageQuery,
} from '../../../../redux/services/defaultLanguage/defaultLanguageApiSlice';

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
  selectedLanguage,
  selectedLevel,
}) => {
  const id = uuid();
  const { t } = useTranslation();

  const { data: level } = useGetDefLanguageLevelQuery('language-proficiency-levels.json');
  const levelCodes = level ? level.map((lvl) => lvl.split('|')[1].toLowerCase()) : [];

  const { data: language } = useGetDefLanguageQuery('language-proficiency-names.json');
  const languagesArray = language ? Object.entries(language).map(([name, id]) => ({ id, name })) : [];

  const handleLanguageSelectChange = (event) => {
    const selectedLang = event.target.value;
    handleLanguageChange(selectedLang);
  };

  const handleLevelSelectChange = (event) => {
    const selectedLvl = event.target.value;
    handleLevelChange(selectedLvl);
  };

  return (
    <>
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
          {languagesArray.length > 0 &&
            languagesArray.map(({ id }) => (
              <MenuItem key={id} value={id} sx={styles.menuItem}>
                {t(`language.name.${id}`)}
              </MenuItem>
            ))}
        </Select>
        {errorLanguage && (
          <FormHelperText id={id} sx={styles.textHelper}>
            {t(helperTextLanguage)}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl fullWidth variant={variant} sx={styles.wrapper} error={errorLevel} disabled={!selectedLanguage}>
        <InputLabel htmlFor={`${id}-level`} sx={styles.label}>
          {t(labelLevel)}
        </InputLabel>
        <Select
          sx={styles.input}
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
          {levelCodes.length > 0 &&
            levelCodes.map((level) => (
              <MenuItem key={level} value={level} sx={styles.menuItem}>
                {t(`language.level.${level}`)}
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
  selectedLanguage: PropTypes.string,
  selectedLevel: PropTypes.string,
};

export default SelectLanguage;
