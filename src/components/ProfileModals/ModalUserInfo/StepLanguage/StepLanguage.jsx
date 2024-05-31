import React, { useEffect, useState } from 'react';
import { styles } from './StepLanguage.styles';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { languages } from '../../../../utils/constants/languages';
import SelectLanguage from '../../../Inputs/SelectLanguage';
import LanguageLevel from '../../../UI/LanguageLevel';
import { ButtonDef } from '../../../Buttons';
import { useFormik } from 'formik';
import { StepAvatarSchema } from '../StepAvatar/StepAvatarSchema';

const StepLanguage = () => {
  const [lang, setLang] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [errorLanguage, setErrorLanguage] = useState(false);
  const [errorLevel, setErrorLevel] = useState(false);
  const [helperTextLanguage, setHelperTextLanguage] = useState('');
  const [helperTextLevel, setHelperTextLevel] = useState('');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setSelectedLevel('');
    setErrorLanguage(false);
    setHelperTextLanguage('');
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setErrorLevel(false);
    setHelperTextLevel('');
  };

  const createLang = () => {
    let hasError = false;

    if (!selectedLanguage) {
      setErrorLanguage(true);
      setHelperTextLanguage('profile.modal.userInfo.languages.selectLanguage');
      hasError = true;
    }

    if (!selectedLevel) {
      setErrorLevel(true);
      setHelperTextLevel('profile.modal.userInfo.languages.selectLevel');
      hasError = true;
    }

    const selectedLangObj = languages.find((lang) => lang.name === selectedLanguage);
    if (lang.some((item) => item.language === selectedLanguage)) {
      setErrorLanguage(true);
      setHelperTextLanguage('profile.modal.userInfo.languages.languageAdded');
      hasError = true;
    }

    if (!hasError) {
      const newLang = {
        language: selectedLanguage,
        languageLevel: selectedLevel,
        code: selectedLangObj.code,
      };
      setLang([...lang, newLang]);
      setSelectedLanguage('');
      setSelectedLevel('');
    }
  };

  const languageDeleteHandler = (languageToDelete) => {
    setLang(lang.filter((item) => item.language !== languageToDelete));
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    lang,
    validationSchema: StepAvatarSchema,
    onSubmit,
  });
  useEffect(() => console.log(lang), [lang]);

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <SelectLanguage
            variant='outlined'
            handleLanguageChange={handleLanguageChange}
            handleLevelChange={handleLevelChange}
            labelLanguage='profile.modal.userInfo.languages.language'
            labelLevel='profile.modal.userInfo.languages.level'
            helperTextLanguage={helperTextLanguage}
            helperTextLevel={helperTextLevel}
            errorLanguage={errorLanguage}
            errorLevel={errorLevel}
            data={languages}
          />
          <IconButton sx={styles.iconBtn} onClick={createLang}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input100}>
          {lang.map((item) => (
            <LanguageLevel
              key={item.id}
              level={item.languageLevel}
              language={item.language}
              code={item.code}
              tobeDeleted={true}
              languageDeleteHandler={languageDeleteHandler}
            />
          ))}
        </Box>
        <ButtonDef variant='contained' type='submit' label='profile.modal.btn' correctStyle={styles.btn} />
      </form>
    </Box>
  );
};

export default StepLanguage;
