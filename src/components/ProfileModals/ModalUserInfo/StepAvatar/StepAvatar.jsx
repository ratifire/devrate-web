import React, { useEffect } from 'react';
import { styles } from './StepAvatar.styles';
import { Box } from '@mui/material';
import LoadImages from '../../../UI/LoadImages';
import { useFormik } from 'formik';
import { StepAvatarSchema } from './StepAvatarSchema';
import { useAddPicturesUserMutation } from '../../../../redux/user/userApiSlice';
import { useSelector } from 'react-redux';

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const [addPicturesUser] = useAddPicturesUserMutation();
  const userId = useSelector((state) => state.auth.user.data.id);
  const onSubmit = (values) => {
    const { avatar } = values;
    console.log('Submitted values:', avatar);
    addPicturesUser({
      userId,
      avatar,
    });
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
     console.log(formik.values.avatar, 'formik.values.avatar');
    }, [formik.values.avatar]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.input100}>
        <LoadImages handleChange={handleAvatarChange} handleBlur={formik.handleBlur} value={formik.values.avatar} />
      </Box>
      <button onClick={onSubmit}>eqweqeq</button>
    </Box>
  );
};

export default StepAvatar;
