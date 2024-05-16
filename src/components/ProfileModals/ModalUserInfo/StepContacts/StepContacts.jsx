import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './StepContacts.styles';
import { FormInput } from '../../../Inputs';
import { Box } from '@mui/material';

const StepContacts = ({ values, handleChange, handleBlur, errors, touched }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.input100}>
        <FormInput
          name='telegram'
          value={values.telegram}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.telegram'
          helperText={touched.telegram && errors.telegram}
          error={touched.telegram && Boolean(errors.telegram)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='linkedIn'
          value={values.linkedIn}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.linkedIn'
          helperText={touched.linkedIn && errors.linkedIn}
          error={touched.linkedIn && Boolean(errors.linkedIn)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='gitHub'
          value={values.gitHub}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.gitHub'
          helperText={touched.gitHub && errors.gitHub}
          error={touched.gitHub && Boolean(errors.gitHub)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='behance'
          value={values.behance}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.behance'
          helperText={touched.behance && errors.behance}
          error={touched.behance && Boolean(errors.behance)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='mail'
          value={values.mail}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.mail'
          helperText={touched.mail && errors.mail}
          error={touched.mail && Boolean(errors.mail)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='phone'
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.phone'
          helperText={touched.phone && errors.phone}
          error={touched.phone && Boolean(errors.phone)}
        />
      </Box>
    </Box>
  );
};

StepContacts.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default StepContacts;
