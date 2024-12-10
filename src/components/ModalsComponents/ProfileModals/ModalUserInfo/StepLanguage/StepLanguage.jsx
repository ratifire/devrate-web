import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
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
  const { data: user } = useSelector(selectCurrentUser);
  const {
    data: dataGetLanguage,
    isError: isErrorGetLanguage,
    isFetching: isFetchingGetLanguage,
  } = useGetLanguageUserQuery(user.id, { skip: !user });
  const [postLanguageUser, { data: dataPostLanguage, isError: isErrorPostLanguage, isLoading: isLoadingPostLanguage }] =
    usePostLanguageUserMutation(user.id, { skip: !user });
  const onSubmit = (values) => {
    postLanguageUser({
      userId: user.id,
      body: values.languages,
    });
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      languages: dataPostLanguage || dataGetLanguage || [],
    },
    onSubmit,
    enableReinitialize: true,
  });
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
          correctStyle={styles.btn}
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          label='profile.modal.btn'
          type='submit'
          variant='contained'
        />
      </form>
    </Box>
  );
};
export default StepLanguage;
