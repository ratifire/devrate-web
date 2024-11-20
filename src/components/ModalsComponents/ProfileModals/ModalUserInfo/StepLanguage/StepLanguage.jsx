import { Box } from '@mui/material';
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

  const [isFormUnchanged, setIsFormUnchanged] = useState(true);

  
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


  useEffect(() => {

    // Todo: replace with lodash func
    setIsFormUnchanged(JSON.stringify(formik.values.languages) === JSON.stringify(languages));
  }, [formik.values.languages, languages]);


  const createLang = (data) => {
    const { selectedLanguage, selectedLevel } = data;

      const newLang = {
        name: selectedLanguage,
        level: selectedLevel,
        code: selectedLanguage,
      };
      formik.setFieldValue('languages', [...formik.values.languages, newLang]);
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
              onSubmit={createLang}
              prohibitedValues={formik.values.languages}
          />
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
          disabled={isFormUnchanged}
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
