import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import {
  useGetLanguageUserQuery,
  usePostLanguageUserMutation,
} from '../../../../../redux/user/language/languageApiSlice';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { SelectLanguage } from '../../../../FormsComponents/Inputs';
import LanguageLevel from '../../../../UI/LanguageLevel';
import { styles } from './StepLanguage.styles';

const StepLanguage = () => {
  const { data: user } = useSelector(selectCurrentUser);
  const { data: languages } = useGetLanguageUserQuery(user.id);
  const [postLanguageUser] = usePostLanguageUserMutation(user.id);

  const [formState, setFormState] = useState({
    selectedLanguage: '',
    selectedLevel: '',
    errorLanguage: false,
    errorLevel: false,
    helperTextLanguage: '',
    helperTextLevel: '',
  });

  const [disabled, setDisabled] = useState(true);

  const formik = useFormik({
    initialValues: {
      languages: [],
    },
    onSubmit: (values) => {
      postLanguageUser({
        userId: user.id,
        body: values.languages,
      });
    },
  });

  useEffect(() => {
    if (languages) {
      formik.setFieldValue('languages', languages);
    }
  }, [languages]);

  // Compare initial languages with current form values to detect changes
  useEffect(() => {
    if (languages) {
      const isFormUnchanged =
        JSON.stringify(formik.values.languages) === JSON.stringify(languages);
      setDisabled(isFormUnchanged);
    }
  }, [formik.values.languages, languages]);

  const handleLanguageChange = (language) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedLanguage: language,
      selectedLevel: '',
      errorLanguage: false,
      helperTextLanguage: '',
    }));
  };

  const handleLevelChange = (level) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedLevel: level,
      errorLevel: false,
      helperTextLevel: '',
    }));
  };

  const createLang = () => {
    const { selectedLanguage, selectedLevel } = formState;
    let hasError = false;

    if (!selectedLanguage) {
      setFormState((prevState) => ({
        ...prevState,
        errorLanguage: true,
        helperTextLanguage: 'profile.modal.userInfo.languages.selectLanguage',
      }));
      hasError = true;
    }

    if (!selectedLevel) {
      setFormState((prevState) => ({
        ...prevState,
        errorLevel: true,
        helperTextLevel: 'profile.modal.userInfo.languages.selectLevel',
      }));
      hasError = true;
    }

    if (formik.values.languages.some((item) => item.name === selectedLanguage)) {
      setFormState((prevState) => ({
        ...prevState,
        errorLanguage: true,
        helperTextLanguage: 'profile.modal.userInfo.languages.languageAdded',
      }));
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
            variant="outlined"
            handleLanguageChange={handleLanguageChange}
            handleLevelChange={handleLevelChange}
            labelLanguage="profile.modal.userInfo.languages.language"
            labelLevel="profile.modal.userInfo.languages.level"
            helperTextLanguage={formState.helperTextLanguage}
            helperTextLevel={formState.helperTextLevel}
            errorLanguage={formState.errorLanguage}
            errorLevel={formState.errorLevel}
            selectedLanguage={formState.selectedLanguage}
            selectedLevel={formState.selectedLevel}
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

        <ButtonDef
          disabled={disabled}
          variant="contained"
          type="submit"
          label="profile.modal.btn"
          correctStyle={styles.btn}
        />
      </form>
    </Box>
  );
};

export default StepLanguage;
