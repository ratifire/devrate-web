import React from 'react';
import { styles } from './StepPersonal.styles';
import { FormInput, FormSelect, TextAreaInput } from '../../../Inputs';
import { userCountries } from '../../../../utils/constants/userCountries';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { StepPersonalSchema } from './StepPersonalSchema';
import { useUpdatePersonalUserMutation } from '../../../../redux/user/userApiSlice';
import { ButtonDef } from '../../../Buttons';

const StepPersonal = () => {
  const userData = useSelector((state) => state.auth.user.data);

  const initialValues = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    city: userData.city,
    country: userData.country,
    position: userData.position,
    description: userData.description,
  };
  const [updatePersonalUser] = useUpdatePersonalUserMutation();
  const onSubmit = ({ firstName, lastName, city, country, position, description }) => {
    updatePersonalUser({
      id: userData.id,
      firstName: firstName,
      lastName: lastName,
      status: position,
      country: country,
      city: city,
      subscribed: userData.subscribed,
      description: description,
    });
    console.log(
      {
        id: userData.id,
        firstName: firstName,
        lastName: lastName,
        status: position,
        country: country,
        city: city,
        subscribed: userData.subscribed,
        description: description,
      },
      'onSubmit'
    );
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
        <FormSelect
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
          name='position'
          value={formik.values.position}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.personal.status'
          helperText={formik.touched.position && formik.errors.position}
          error={formik.touched.position && Boolean(formik.errors.position)}
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
