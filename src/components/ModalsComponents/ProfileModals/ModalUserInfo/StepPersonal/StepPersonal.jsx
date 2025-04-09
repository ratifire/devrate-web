import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import _ from 'lodash';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import { useGetPersonalUserQuery, usePutPersonalUserMutation } from '@redux/api/slices/user/personal/personalApiSlice';
import { useGetCountryListQuery } from '@redux/api/slices/countryList/countryApiSlice';
import { CountryFormSelector, FormInput, TextAreaInput } from '@components/FormsComponents/Inputs';
import { StepPersonalSchema } from '@utils/validationSchemas/index';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { StepPersonalSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { styles } from './StepPersonal.styles';

const StepPersonal = () => {
  const {
    data: userCountries,
    isFetching: isFetchingGetCountry,
    isError: isErrorFetchingGetCountry,
  } = useGetCountryListQuery();
  const { data: userData } = useSelector(selectCurrentUser);
  const [putPersonalUser, { data: dataPutPersonalUser, isError: isErrorPutPersonal, isLoading: isLoadingPutPersonal }] =
    usePutPersonalUserMutation();

  const {
    data: dataGetPersonal,
    isFetching: isFetchingGetPersonal,
    isError: isErrorGetPersonal,
  } = useGetPersonalUserQuery(userData.id, { skip: !userData.id });
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const personalData = dataPutPersonalUser || dataGetPersonal || {};
  const { firstName, lastName, city, country, status, description } = _.defaults(personalData, {
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    city: userData.city || '',
    country: userData.country || '',
    status: userData.status || '',
    description: '',
  });

  const initialValues = {
    firstName,
    lastName,
    city,
    country,
    status,
    description,
  };

  const onSubmit = async ({ firstName, lastName, city, country, status, description }) => {
    try {
      await putPersonalUser({
        id: userData.id,
        firstName: firstName,
        lastName: lastName,
        status: status,
        country: country,
        city: city,
        subscribed: userData.subscribed,
        description: description,
      }).unwrap();
      enqueueSnackbar(t('modalNotifyText.personal.create.success'), { variant: 'success' });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.personal.create.error'), { variant: 'error' });
    }
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: StepPersonalSchema,
    onSubmit,
    enableReinitialize: true,
  });

  if (isErrorFetchingGetCountry || isErrorGetPersonal || isErrorPutPersonal) {
    return <ErrorComponent />;
  }

  if (isFetchingGetCountry || isFetchingGetPersonal || isLoadingPutPersonal) {
    return <StepPersonalSkeleton />;
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.input50}>
          <FormInput
            required
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.firstName && formik.errors.firstName}
            label='profile.modal.userInfo.personal.firstName'
            name='firstName'
            type='text'
            value={formik.values.firstName}
          />
        </Box>
        <Box sx={styles.input50}>
          <FormInput
            required
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.lastName && formik.errors.lastName}
            label='profile.modal.userInfo.personal.lastName'
            name='lastName'
            type='text'
            value={formik.values.lastName}
          />
        </Box>
        <Box sx={styles.input50}>
          <FormInput
            required
            error={formik.touched.city && Boolean(formik.errors.city)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.city && formik.errors.city}
            label='profile.modal.userInfo.personal.city'
            name='city'
            type='text'
            value={formik.values.city}
          />
        </Box>
        <Box sx={styles.input50}>
          <CountryFormSelector
            required
            autoComplete='off'
            countries={userCountries}
            error={formik.touched.country && Boolean(formik.errors.country)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.country && formik.errors.country}
            label='profile.modal.userInfo.personal.country'
            name='country'
            value={formik.values.country}
            variant='outlined'
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            error={formik.touched.status && Boolean(formik.errors.status)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.status && formik.errors.status}
            label='profile.modal.userInfo.personal.status'
            name='status'
            type='text'
            value={formik.values.status}
          />
        </Box>
        <Box sx={styles.input100}>
          <TextAreaInput
            error={formik.touched.description && Boolean(formik.errors.description)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.description && formik.errors.description}
            label='profile.modal.userInfo.personal.about_me'
            name='description'
            rows={4}
            type='text'
            value={formik.values.description}
          />
        </Box>
      </Box>

      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting || isLoadingPutPersonal}
          label={t('profile.modal.btn')}
          loading={isLoadingPutPersonal}
          sx={styles.btn}
          type='submit'
          variant='contained'
        />
      </Box>
    </form>
  );
};

export default StepPersonal;
