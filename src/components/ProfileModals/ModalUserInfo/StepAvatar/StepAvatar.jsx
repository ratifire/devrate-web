import React from 'react';
import { styles } from './StepAvatar.styles';
import { Box } from '@mui/material';
import LoadImages from '../../../UI/LoadImages';
import { useFormik } from 'formik';
import { StepAvatarSchema } from './StepAvatarSchema';
import { useDeleteAvatarUserMutation, usePostAvatarUserMutation } from '../../../../redux/user/avatar/avatarApiSlice';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../../../redux/auth/authSlice';

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const { data: user } = useSelector(selectCurrentUser);

  const [postAvatarUser] = usePostAvatarUserMutation();
  const onSubmit = (values) => {
    const { avatar } = values;
    postAvatarUser({
      userId: user.id,
      avatar: avatar,
    });
  };

  const [deleteAvatarUser] = useDeleteAvatarUserMutation();

  const handleDeleteAvatar = () => {
    deleteAvatarUser(user.id);
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
          <LoadImages
            handleChange={handleAvatarChange}
            handleBlur={formik.handleBlur}
            handlerDelete={handleDeleteAvatar}
            value={formik.values.avatar}
          />
        </Box>
      </form>
    </Box>
  );
};

export default StepAvatar;
