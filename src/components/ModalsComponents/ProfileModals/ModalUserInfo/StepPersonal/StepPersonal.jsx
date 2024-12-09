import React from 'react';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FormInput, FormSelect, TextAreaInput } from '../../../../FormsComponents/Inputs';
import { StepPersonalSchema } from '../../../../../utils/valadationSchemas/index';
import {
  useGetPersonalUserQuery,
  usePutPersonalUserMutation,
} from '../../../../../redux/user/personal/personalApiSlice';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { useGetCountryListQuery } from '../../../../../redux/countryList/countryApiSlice';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import { StepPersonalSkeleton } from '../../../../UI/Skeleton';
import { ErrorComponent } from '../../../../UI/Exceptions';
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

  const { firstName, lastName, city, country, status, description } = dataPutPersonalUser || dataGetPersonal;
  const { t } = useTranslation();

  const initialValues = {
    firstName: firstName || userData.firstName || '',
    lastName: lastName || userData.lastName || '',
    city: city || userData.city || '',
    country: country || userData.country || '',
    status: status || userData.status || '',
    description: description || '',
  };

  const onSubmit = ({ firstName, lastName, city, country, status, description }) => {
    putPersonalUser({
      id: userData.id,
      firstName: firstName,
      lastName: lastName,
      status: status,
      country: country,
      city: city,
      subscribed: userData.subscribed,
      description: description,
    });

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
          <FormSelect
            required
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
            type='text'
            value={formik.values.description}
          />
        </Box>
      </Box>

      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          correctStyle={styles.btn}
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting || isLoadingPutPersonal}
          label={t('profile.modal.btn')}
          loading={isLoadingPutPersonal}
          type='submit'
          variant='contained'
        />
      </Box>
    </form>
  );
};

export default StepPersonal;
