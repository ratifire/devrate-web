import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import {
  useGetDefLanguageLevelQuery,
  useGetDefLanguageQuery,
} from '../../../../redux/services/defaultLanguage/defaultLanguageApiSlice';
import { styles } from './SelectLanguage.styles';
import AddIcon from '@mui/icons-material/Add';

const SelectLanguage = ({
  variant = 'outlined',
  onSubmit,
  prohibitedValues = null,
}) => {
  const id = uuid();
  const { t } = useTranslation();

  const { data: level } = useGetDefLanguageLevelQuery('language-proficiency-levels.json');
  const levelCodes = level ? level.map((lvl) => lvl.split('|')[1].toLowerCase()) : [];

  const { data: language } = useGetDefLanguageQuery('language-proficiency-names.json');
  const languagesArray = language ? Object.entries(language).map(([name, id]) => ({ id, name })) : [];

  const [selectedLanguage, setSelectedLanguage] = useState({
    selectedLanguage: '',
    selectedLevel: '',
    errorLanguage: false,
    errorLevel: false,
    helperTextLanguage: '',
    helperTextLevel: '',
  });

  const handleChange = (field, value = '') => {
    setSelectedLanguage((prevState) => {
      const updatedState = {
        ...prevState,
        [field]: value,
      };

      if (field === 'selectedLanguage') {
        updatedState.selectedLevel = '';
        updatedState.errorLanguage = false;
        updatedState.helperTextLanguage = '';
      }

      if (field === 'selectedLevel') {
        updatedState.errorLevel = false;
        updatedState.helperTextLevel = '';
      }

      return updatedState;
    });
  };


  const onSubmitLanguageHandler = () => {
    const { selectedLanguage, selectedLevel } = selectedLanguage;
    const updates = {};

    if (!selectedLanguage) {
      updates.errorLanguage = true;
      updates.helperTextLanguage = 'profile.modal.userInfo.languages.selectLanguage';
    }

    if (!selectedLevel) {
      updates.errorLevel = true;
      updates.helperTextLevel = 'profile.modal.userInfo.languages.selectLevel';
    }

    if (prohibitedValues && prohibitedValues.some((item) => item.name === selectedLanguage)) {
      updates.errorLanguage = true;
      updates.helperTextLanguage = 'profile.modal.userInfo.languages.languageAdded';
    }

    if (updates.errorLanguage || updates.errorLevel) {
      setSelectedLanguage((prevState) => ({
        ...prevState,
        ...updates,
      }));
      return;
    }

    onSubmit(selectedLanguage);
    handleChange('selectedLanguage');
    handleChange('selectedLevel');
  };

  return (
    <>
      <FormControl fullWidth variant={variant} sx={styles.wrapper} error={selectedLanguage.errorLanguage}>
        <InputLabel htmlFor={id} sx={styles.label}>
          {t("profile.modal.userInfo.languages.language")}
        </InputLabel>
        <Select
          sx={styles.input}
          id={id}
          name='language'
          value={selectedLanguage}
          label={t("profile.modal.userInfo.languages.language")}
          onChange={(data) => handleChange('selectedLanguage', data)}
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
                {t(`specialization.language.name.${id}`)}
              </MenuItem>
            ))}
        </Select>
        {selectedLanguage.errorLanguage && (
          <FormHelperText id={id} sx={styles.textHelper}>
            {t(selectedLanguage.helperTextLanguage)}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl fullWidth variant={variant} sx={styles.wrapper} error={selectedLanguage.errorLevel} disabled={!selectedLanguage}>
        <InputLabel htmlFor={`${id}-level`} sx={styles.label}>
          {t("profile.modal.userInfo.languages.level")}
        </InputLabel>
        <Select
          sx={styles.input}
          id={`${id}-level`}
          name='languageLevel'
          value={selectedLanguage.selectedLevel}
          label={t("profile.modal.userInfo.languages.level")}
          onChange={(data) => handleChange('selectedLevel', data)}
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
                {t(`specialization.language.level.${level}`)}
              </MenuItem>
            ))}
        </Select>
        {selectedLanguage.errorLevel && (
          <FormHelperText id={`${id}-level`} sx={styles.textHelper}>
            {t(selectedLanguage.helperTextLevel)}
          </FormHelperText>
        )}
      </FormControl>
      <IconButton sx={styles.iconBtn} onClick={onSubmitLanguageHandler}>
        <AddIcon />
      </IconButton>
    </>
  );
};

SelectLanguage.propTypes = {
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  onSubmit: PropTypes.func,
  prohibitedValues: PropTypes.arrayOf(PropTypes.string)
};

export default SelectLanguage;
