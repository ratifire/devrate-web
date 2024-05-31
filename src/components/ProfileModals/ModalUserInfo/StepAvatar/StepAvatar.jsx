import React from 'react';
import { styles } from './StepAvatar.styles';
import { Box } from '@mui/material';
import LoadImages from '../../../UI/LoadImages';
import { useFormik } from 'formik';
import { StepAvatarSchema } from './StepAvatarSchema';
import { usePostAvatarUserMutation } from '../../../../redux/user/avatar/avatarApiSlice';
import { useSelector } from 'react-redux';
import { ButtonDef } from '../../../Buttons';

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const [postAvatarUser] = usePostAvatarUserMutation();
  const userId = useSelector((state) => state.auth.user.data.id);
  const onSubmit = (values) => {
    const { avatar } = values;
    postAvatarUser({
      userId,
      avatar: avatar,
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

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <LoadImages handleChange={handleAvatarChange} handleBlur={formik.handleBlur} value={formik.values.avatar} />
        </Box>
        <ButtonDef variant='contained' type='submit' label='profile.modal.btn' correctStyle={styles.btn} />
      </form>
    </Box>
  );
};

export default StepAvatar;
