import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { styles } from './StepAvatar.styles';
import { Box } from '@mui/material';
import LoadImages from '../../../UI/LoadImages';
import { useFormik } from 'formik';
import { StepAvatarSchema } from '../../../../utils/valadationSchemas/index';
import { useDeleteAvatarUserMutation, usePostAvatarUserMutation, useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const { data: user } = useSelector(selectCurrentUser);
  const [hasAvatar, setHasAvatar] = useState(false);

  const [postAvatarUser] = usePostAvatarUserMutation();
  const [deleteAvatarUser] = useDeleteAvatarUserMutation();
  const { data: avatarData, isSuccess } = useGetAvatarUserQuery(user.id);

  const onSubmit = useCallback((values) => {
    const { avatar } = values;
    postAvatarUser({
      userId: user.id,
      avatar: avatar,
    });
  }, [user.id, postAvatarUser]);

  const formik = useFormik({
    initialValues,
    validationSchema: StepAvatarSchema,
    onSubmit,
  });

  const handleDeleteAvatar = useCallback(() => {
    if (hasAvatar) {
      deleteAvatarUser(user.id);
      formik.setFieldValue('avatar', '');
      setHasAvatar(false);
    }
  }, [hasAvatar, user.id, deleteAvatarUser, formik]);

  const handleAvatarChange = useCallback((img) => {
    formik.setFieldValue('avatar', img);
    setHasAvatar(!!img);
  }, [formik]);

  useEffect(() => {
    if (isSuccess && avatarData && avatarData.userPicture && !formik.values.avatar) {
      formik.setFieldValue('avatar', avatarData.userPicture);
      setHasAvatar(true);
    }
  }, [isSuccess, avatarData, formik, formik.values.avatar]);

  const memoizedLoadImages = useMemo(() => (
    <LoadImages
      handleChange={handleAvatarChange}
      handleBlur={formik.handleBlur}
      handlerDelete={handleDeleteAvatar}
      value={formik.values.avatar}
      showDeleteButton={hasAvatar}
    />
  ), [handleAvatarChange, formik.handleBlur, handleDeleteAvatar, formik.values.avatar, hasAvatar]);

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          {memoizedLoadImages}
        </Box>
      </form>
    </Box>
  );
};

export default StepAvatar;