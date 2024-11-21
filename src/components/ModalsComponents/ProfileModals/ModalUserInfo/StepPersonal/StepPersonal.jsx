import React from 'react';
import { styles } from './StepPersonal.styles';
import { FormInput, FormSelect, TextAreaInput } from '../../../../FormsComponents/Inputs';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
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
            name='firstName'
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            required
            type='text'
            label='profile.modal.userInfo.personal.firstName'
            helperText={formik.touched.firstName && formik.errors.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          />
        </Box>
        <Box sx={styles.input50}>
          <FormInput
            name='lastName'
            value={formik.values.lastName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            required
            type='text'
            label='profile.modal.userInfo.personal.lastName'
            helperText={formik.touched.lastName && formik.errors.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          />
        </Box>
        <Box sx={styles.input50}>
          <FormInput
            name='city'
            value={formik.values.city}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            required
            type='text'
            label='profile.modal.userInfo.personal.city'
            helperText={formik.touched.city && formik.errors.city}
            error={formik.touched.city && Boolean(formik.errors.city)}
          />
        </Box>
        <Box sx={styles.input50}>
          <FormSelect
            variant='outlined'
            name='country'
            value={formik.values.country}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            required
            label='profile.modal.userInfo.personal.country'
            helperText={formik.touched.country && formik.errors.country}
            error={formik.touched.country && Boolean(formik.errors.country)}
            countries={userCountries}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            name='status'
            value={formik.values.status}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label='profile.modal.userInfo.personal.status'
            helperText={formik.touched.status && formik.errors.status}
            error={formik.touched.status && Boolean(formik.errors.status)}
          />
        </Box>
        <Box sx={styles.input100}>
          <TextAreaInput
            name='description'
            value={formik.values.description}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label='profile.modal.userInfo.personal.about_me'
            helperText={formik.touched.description && formik.errors.description}
            error={formik.touched.description && Boolean(formik.errors.description)}
          />
        </Box>
      </Box>

      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          variant='contained'
          correctStyle={styles.btn}
          type='submit'
          label='profile.modal.btn'
        />
      </Box>
    </form>
  );
};

export default StepPersonal;
