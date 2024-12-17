import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FormControl, FormHelperText, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import {
  useGetDefLanguageLevelQuery,
  useGetDefLanguageQuery,
} from '../../../../redux/services/defaultLanguage/defaultLanguageApiSlice';
import { styles } from './SelectLanguage.styles';

const SelectLanguage = ({ variant = 'outlined', onSubmit, prohibitedValues = null }) => {
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

  const handleChange = (field, event = '') => {
    setSelectedLanguage((prevState) => {
      const updatedState = {
        ...prevState,
        [field]: event.target.value || '',
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
    const { selectedLanguage: lang, selectedLevel } = selectedLanguage;
    const updates = {};

    if (!lang) {
      updates.errorLanguage = true;
      updates.helperTextLanguage = 'profile.modal.userInfo.languages.selectLanguage';
    }

    if (!selectedLevel) {
      updates.errorLevel = true;
      updates.helperTextLevel = 'profile.modal.userInfo.languages.selectLevel';
    }

    if (prohibitedValues && prohibitedValues.some((item) => item.name === lang)) {
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
    handleChange('selectedLanguage', { target: '' });
    handleChange('selectedLevel', { target: '' });
  };

  return (
    <>
      <FormControl fullWidth error={selectedLanguage.errorLanguage} sx={styles.wrapper} variant={variant}>
        <InputLabel required htmlFor={id} sx={styles.label}>
          {t('profile.modal.userInfo.languages.language')}
        </InputLabel>
        <Select
          IconComponent={KeyboardArrowDownIcon}
          id={id}
          inputProps={{
            MenuProps: {
              sx: styles.selectField,
            },
          }}
          label={t('profile.modal.userInfo.languages.language')}
          name='language'
          sx={styles.input}
          value={selectedLanguage.selectedLanguage || ''}
          onChange={(data) => handleChange('selectedLanguage', data)}
        >
          {languagesArray.length > 0 &&
            languagesArray.map(({ id }) => (
              <MenuItem key={id} sx={styles.menuItem} value={id}>
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
      <FormControl
        fullWidth
        disabled={!selectedLanguage}
        error={selectedLanguage.errorLevel}
        sx={styles.wrapper}
        variant={variant}
      >
        <InputLabel required htmlFor={`${id}-level`} sx={styles.label}>
          {t('profile.modal.userInfo.languages.level')}
        </InputLabel>
        <Select
          IconComponent={KeyboardArrowDownIcon}
          disabled={!selectedLanguage.selectedLanguage}
          id={`${id}-level`}
          inputProps={{
            MenuProps: {
              sx: styles.selectField,
            },
          }}
          label={t('profile.modal.userInfo.languages.level')}
          name='languageLevel'
          sx={styles.input}
          value={selectedLanguage.selectedLevel || ''}
          onChange={(data) => handleChange('selectedLevel', data)}
        >
          {levelCodes.length > 0 &&
            levelCodes.map((level) => (
              <MenuItem key={level} sx={styles.menuItem} value={level}>
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
  prohibitedValues: PropTypes.array,
};

export default SelectLanguage;
