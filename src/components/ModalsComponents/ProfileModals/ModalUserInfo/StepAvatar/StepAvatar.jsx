import { Box } from '@mui/material';
import { useFormik } from 'formik';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import {
  useDeleteAvatarUserMutation,
  useGetAvatarUserQuery,
  usePostAvatarUserMutation,
} from '../../../../../redux/user/avatar/avatarApiSlice';
import { StepAvatarSchema } from '../../../../../utils/valadationSchemas/index';
import LoadImages from '../../../../UI/LoadImages';
import { styles } from './StepAvatar.styles';

const MemoizedLoadImages = memo(LoadImages);

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const { data: user } = useSelector(selectCurrentUser);
  const [hasAvatar, setHasAvatar] = useState(false);

  const [postAvatarUser] = usePostAvatarUserMutation();
  const [deleteAvatarUser] = useDeleteAvatarUserMutation();
  const { data: avatarData, isSuccess } = useGetAvatarUserQuery(user.id);

  const avatarValue = avatarData?.userPicture || '';

  const onSubmit = useCallback(
    (values) => {
      const { avatar } = values;
      postAvatarUser({
        userId: user.id,
        avatar: avatar,
      });
    },
    [user.id, postAvatarUser]
  );

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

  const handleAvatarChange = useCallback(
    (img) => {
      formik.setFieldValue('avatar', img);
      setHasAvatar(!!img);
    },
    [formik]
  );

  useEffect(() => {
    if (isSuccess && avatarValue && !formik.values.avatar) {
      formik.setFieldValue('avatar', avatarValue);
      setHasAvatar(true);
    }
  }, [isSuccess, avatarValue, formik.values.avatar]);

  const memoizedLoadImages = useMemo(
    () => (
      <MemoizedLoadImages
        handleChange={handleAvatarChange}
        handleBlur={formik.handleBlur}
        handlerDelete={handleDeleteAvatar}
        value={avatarValue}
        showDeleteButton={hasAvatar}
      />
    ),
    [handleAvatarChange, formik.handleBlur, handleDeleteAvatar, avatarValue, hasAvatar]
  );

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>{memoizedLoadImages}</Box>
      </form>
    </Box>
  );
};

export default StepAvatar;
