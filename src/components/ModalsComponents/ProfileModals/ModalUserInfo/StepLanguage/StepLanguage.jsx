import { Box } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import {
  useGetLanguageUserQuery,
  usePostLanguageUserMutation,
} from '../../../../../redux/user/language/languageApiSlice';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { SelectLanguage } from '../../../../FormsComponents/Inputs';
import LanguageLevel from '../../../../UI/LanguageLevel';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { StepLanguageSkeleton } from '../../../../UI/Skeleton';
import { styles } from './StepLanguage.styles';
const StepLanguage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const { data: user } = useSelector(selectCurrentUser);
  const {
    data: dataGetLanguage,
    isError: isErrorGetLanguage,
    isFetching: isFetchingGetLanguage,
  } = useGetLanguageUserQuery(user.id, { skip: !user });
  const [postLanguageUser, { data: dataPostLanguage, isError: isErrorPostLanguage, isLoading: isLoadingPostLanguage }] =
    usePostLanguageUserMutation(user.id, { skip: !user });
  const onSubmit = async (values) => {
    try {
      await postLanguageUser({
        userId: user.id,
        body: values.languages,
      }).unwrap();
      enqueueSnackbar(t('modalNotifyText.language.create.success'), { variant: 'success' });
      formik.resetForm();
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.language.create.error'), { variant: 'error' });
    }
  };
  const formik = useFormik({
    initialValues: {
      languages: dataPostLanguage || dataGetLanguage || [],
    },
    onSubmit,
    enableReinitialize: true,
  });
  const createLang = async (data) => {
    try {
      const { selectedLanguage, selectedLevel } = data;
      const newLang = {
        name: selectedLanguage,
        level: selectedLevel,
        code: selectedLanguage,
      };
      await formik.setFieldValue('languages', [...formik.values.languages, newLang]);
      enqueueSnackbar(t('modalNotifyText.language.add.success'), { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.language.add.error'), { variant: 'error' });
    }
  };
  const languageDeleteHandler = (languageToDelete) => {
    formik.setFieldValue(
      'languages',
      formik.values.languages.filter((item) => item.name !== languageToDelete)
    );
  };
  if (isErrorGetLanguage || isErrorPostLanguage) {
    return <ErrorComponent />;
  }
  if (isFetchingGetLanguage || isLoadingPostLanguage) {
    return <StepLanguageSkeleton />;
  }
  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <SelectLanguage prohibitedValues={formik.values.languages} onSubmit={createLang} />
        </Box>
        <Box sx={styles.input100}>
          <Box sx={styles.wrapperLanguages}>
            {formik.values.languages.map((item) => (
              <LanguageLevel
                key={item.name}
                tobeDeleted
                language={item.name}
                languageDeleteHandler={languageDeleteHandler}
                level={item.level}
              />
            ))}
          </Box>
        </Box>
        <ButtonDef
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          label={t('profile.modal.btn')}
          loading={isLoadingPostLanguage}
          sx={styles.btn}
          type='submit'
          variant='contained'
        />
      </form>
    </Box>
  );
};
export default StepLanguage;
