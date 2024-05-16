import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './StepPersonal.styles';
import { FormInput, FormSelect } from '../../../Inputs';
import { userCountries } from '../../../../utils/constants/userCountries';
import { Box } from '@mui/material';

const StepPersonal = ({ values, handleChange, handleBlur, errors, touched }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.input50}>
        <FormInput
          name='firstName'
          value={values.firstName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.personal.firstName'
          helperText={touched.firstName && errors.firstName}
          error={touched.firstName && Boolean(errors.firstName)}
        />
      </Box>
      <Box sx={styles.input50}>
        <FormInput
          name='lastName'
          value={values.lastName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          label='profile.modal.userInfo.personal.lastName'
          helperText={touched.lastName && errors.lastName}
          error={touched.lastName && Boolean(errors.lastName)}
        />
      </Box>
      <Box sx={styles.input50}>
        <FormInput
          name='city'
          value={values.city}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.personal.city'
          helperText={touched.city && errors.city}
          error={touched.city && Boolean(errors.city)}
        />
      </Box>
      <Box sx={styles.input50}>
        <FormSelect
          variant='outlined'
          name='country'
          value={values.country}
          handleChange={handleChange}
          handleBlur={handleBlur}
          label='profile.modal.userInfo.personal.country'
          helperText={touched.country && errors.country}
          error={touched.country && Boolean(errors.country)}
          countries={userCountries}
          itemsText='modal.registration.countries'
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='status'
          value={values.status}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.personal.status'
          helperText={touched.status && errors.status}
          error={touched.status && Boolean(errors.status)}
        />
      </Box>
    </Box>
  );
};

StepPersonal.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default StepPersonal;
