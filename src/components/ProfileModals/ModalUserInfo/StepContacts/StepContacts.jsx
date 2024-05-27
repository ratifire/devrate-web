import React, { useEffect } from 'react';
import { styles } from './StepContacts.styles';
import { FormInput } from '../../../Inputs';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { StepContactsSchema } from './StepContactsSchema';

const StepContacts = () => {
  const initialValues = {
    telegram: '',
    linkedIn: '',
    gitHub: '',
    behance: '',
    mail: '',
    phone: '',
  };
  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: StepContactsSchema,
    onSubmit,
  });
  useEffect(() => {
    console.log(formik.values, '11111111111111');
  }, [formik.values]);
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.input100}>
        <FormInput
          name='telegram'
          value={formik.values.telegram}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.telegram'
          helperText={formik.touched.telegram && formik.errors.telegram}
          error={formik.touched.telegram && Boolean(formik.errors.telegram)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='linkedIn'
          value={formik.values.linkedIn}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.linkedIn'
          helperText={formik.touched.linkedIn && formik.errors.linkedIn}
          error={formik.touched.linkedIn && Boolean(formik.errors.linkedIn)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='gitHub'
          value={formik.values.gitHub}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.gitHub'
          helperText={formik.touched.gitHub && formik.errors.gitHub}
          error={formik.touched.gitHub && Boolean(formik.errors.gitHub)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='behance'
          value={formik.values.behance}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.behance'
          helperText={formik.touched.behance && formik.errors.behance}
          error={formik.touched.behance && Boolean(formik.errors.behance)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='mail'
          value={formik.values.mail}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.mail'
          helperText={formik.touched.mail && formik.errors.mail}
          error={formik.touched.mail && Boolean(formik.errors.mail)}
        />
      </Box>
      <Box sx={styles.input100}>
        <FormInput
          name='phone'
          value={formik.values.phone}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          type='text'
          label='profile.modal.userInfo.contact.phone'
          helperText={formik.touched.phone && formik.errors.phone}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
        />
      </Box>
    </Box>
  );
};

export default StepContacts;
