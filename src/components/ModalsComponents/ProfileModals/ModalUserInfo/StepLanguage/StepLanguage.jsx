import React, { useEffect, useState } from 'react';
import { styles } from './StepLanguage.styles';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SelectLanguage } from '../../../../FormsComponents/Inputs';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { useFormik } from 'formik';
import LanguageLevel from '../../../../UI/LanguageLevel';
import { useGetLanguageUserQuery, usePostLanguageUserMutation } from '../../../../../redux/user/language/languageApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';

const StepLanguage = () => {
  const { data: user } = useSelector(selectCurrentUser);

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [errorLanguage, setErrorLanguage] = useState(false);
  const [errorLevel, setErrorLevel] = useState(false);
  const [helperTextLanguage, setHelperTextLanguage] = useState('');
  const [helperTextLevel, setHelperTextLevel] = useState('');

  const { data } = useGetLanguageUserQuery(user.id);
  const [postLanguageUser] = usePostLanguageUserMutation(user.id);

  const onSubmit = (values) => {
    postLanguageUser({
      userId: user.id,
      body: values.languages,
    });
  };
  const formik = useFormik({
    initialValues: {
      languages: [],
    },
    onSubmit,
  });

  useEffect(() => {
    if (data) {
      formik.setFieldValue('languages', data);
    }
  }, [data]);

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

    if (formik.values.languages.some((item) => item.name === selectedLanguage)) {
      setErrorLanguage(true);
      setHelperTextLanguage('profile.modal.userInfo.languages.languageAdded');
      hasError = true;
    }

    if (!hasError) {
      const newLang = {
        name: selectedLanguage,
        level: selectedLevel,
        code: selectedLanguage,
      };
      formik.setFieldValue('languages', [...formik.values.languages, newLang]);
      handleLanguageChange('');
      handleLevelChange('');
    }
  };

  const languageDeleteHandler = (languageToDelete) => {
    formik.setFieldValue(
      'languages',
      formik.values.languages.filter((item) => item.name !== languageToDelete)
    );
  };

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
            selectedLanguage={selectedLanguage}
            selectedLevel={selectedLevel}
          />
          <IconButton sx={styles.iconBtn} onClick={createLang}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input100}>
          <Box sx={styles.wrapperLanguages}>
            {formik.values.languages.map((item) => (
              <LanguageLevel
                key={item.name}
                level={item.level}
                language={item.name}
                tobeDeleted={true}
                languageDeleteHandler={languageDeleteHandler}
              />
            ))}
          </Box>
        </Box>
        <ButtonDef variant='contained' type='submit' label='profile.modal.btn' correctStyle={styles.btn} />
      </form>
    </Box>
  );
};

export default StepLanguage;
