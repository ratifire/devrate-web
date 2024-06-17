import React from 'react';
import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import { styles } from './SelectSkills.styles';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import { useGetDefLanguageQuery } from '../../../redux/services/defaultLanguage/defaultLanguageApiSlice';

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

  const { data: language } = useGetDefLanguageQuery('language-proficiency-names.json');
  const languagesArray = language ? Object.entries(language).map(([name, id]) => ({ id, name })) : [];

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
