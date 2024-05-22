import React, { useEffect } from 'react';
import { styles } from './StepAvatar.styles';
import { Box } from '@mui/material';
import LoadImages from '../../../UI/LoadImages';
import { useFormik } from 'formik';
import { StepAvatarSchema } from './StepAvatarSchema';

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: StepAvatarSchema,
    onSubmit,
  });

  const handleAvatarChange = (img) => {
    formik.setFieldValue('avatar', img);
  };

  useEffect(() => {
    console.log(formik.values.avatar, '12312312');
  }, [formik.values.avatar]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.input100}>
        <LoadImages handleChange={handleAvatarChange} handleBlur={formik.handleBlur} value={formik.values.avatar} />
      </Box>
    </Box>
  );
};

export default StepAvatar;
