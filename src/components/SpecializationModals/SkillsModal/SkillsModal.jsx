import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SelectSkills from '../../Inputs/SelectSkills/SelectSkills';
import { ButtonDef } from '../../Buttons';
import { useFormik } from 'formik';
import { useGetLanguageUserQuery, usePostLanguageUserMutation } from '../../../redux/user/language/languageApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import { styles } from '../SkillsModal/SkillsModal.styles';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';

const SkillsModal = () => {
  const { t } = useTranslation();
  const { data: user } = useSelector(selectCurrentUser);

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [errorLanguage, setErrorLanguage] = useState(false);
  const [helperTextLanguage, setHelperTextLanguage] = useState('');

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
    setErrorLanguage(false);
    setHelperTextLanguage('');
  };

  const createLang = () => {
    let hasError = false;

    if (!selectedLanguage) {
      setErrorLanguage(true);
      setHelperTextLanguage('profile.modal.userInfo.languages.selectLanguage');
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
        code: selectedLanguage,
      };
      formik.setFieldValue('languages', [...formik.values.languages, newLang]);
      handleLanguageChange('');
    }
  };

  const languageDeleteHandler = (languageToDelete) => {
    formik.setFieldValue(
      'languages',
      formik.values.languages.filter((item) => item.name !== languageToDelete)
    );
  };

  return (
    <Box sx={styles.modalContent}>
      <Typography variant='h6' sx={styles.title}>
        {t('specialisation.skillsModal.title')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <SelectSkills
            variant='outlined'
            handleLanguageChange={handleLanguageChange}
            labelLanguage='profile.modal.userInfo.languages.language'
            helperTextLanguage={helperTextLanguage}
            errorLanguage={errorLanguage}
            selectedLanguage={selectedLanguage}
          />
          <IconButton sx={styles.iconBtn} onClick={createLang}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={styles.input100}>
          <Box sx={styles.wrapperLanguages}>
            {formik.values.languages.map((item) => (
              <Chip
                key={item.name}
                label={
                  <Typography variant="subtitle2">
                    {item.name}
                  </Typography> }
                onDelete={() => languageDeleteHandler(item.name)}
                deleteIcon={<CloseIcon />}
                sx={styles.skillItem}
              />
            ))}
          </Box>
        </Box>
        <ButtonDef variant='contained' type='submit' label='profile.modal.btn' correctStyle={styles.btn} />
      </form>
    </Box>
  );
};

export default SkillsModal;
