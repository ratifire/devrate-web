import React from 'react';
import { styles } from './StepPersonal.styles';
import { FormInput, TextAreaInput } from '../../../Inputs';
import { userCountries } from '../../../../utils/constants/userCountries';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { StepPersonalSchema } from './StepPersonalSchema';
import { usePutPersonalUserMutation } from '../../../../redux/user/personal/personalApiSlice';
import { ButtonDef } from '../../../Buttons';
import CountrySelect from '../../../Inputs/CountrySelect';

const StepPersonal = () => {
  const userData = useSelector((state) => state.auth.user.data);

  const initialValues = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    city: userData.city,
    country: userData.country,
    status: userData.status,
    description: userData.description,
  };

  const [putPersonalUser] = usePutPersonalUserMutation();
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
  };
  const formik = useFormik({
    initialValues,
    validationSchema: StepPersonalSchema,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.input50}>
        <FormInput
          name='firstName'
          value={formik.values.firstName}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
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
          type='text'
          label='profile.modal.userInfo.personal.city'
          helperText={formik.touched.city && formik.errors.city}
          error={formik.touched.city && Boolean(formik.errors.city)}
        />
      </Box>
      <Box sx={styles.input50}>
        <CountrySelect
          variant='outlined'
          name='country'
          value={formik.values.country}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label='profile.modal.userInfo.personal.country'
          helperText={formik.touched.country && formik.errors.country}
          error={formik.touched.country && Boolean(formik.errors.country)}
          countries={userCountries}
          itemsText='modal.registration.countries'
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
      <Box sx={styles.wrapperBtn}>
        <ButtonDef variant='contained' correctStyle={styles.btn} type='submit' label='profile.modal.btn' />
      </Box>
    </form>
  );
};

export default StepPersonal;
