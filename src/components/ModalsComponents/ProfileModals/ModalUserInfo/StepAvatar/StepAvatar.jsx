import { Box } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../redux/auth/authSlice';
import {
  useDeleteAvatarUserMutation,
  useGetAvatarUserQuery,
  usePostAvatarUserMutation,
} from '../../../../../redux/user/avatar/avatarApiSlice';
import { StepAvatarSchema } from '../../../../../utils/valadationSchemas/index';
import LoadImages from '../../../../UI/LoadImages';
import { ErrorComponent } from '../../../../UI/Exceptions';
import { StepAvatarSkeleton } from '../../../../UI/Skeleton';
import { styles } from './StepAvatar.styles';

const StepAvatar = () => {
  const { data: user } = useSelector(selectCurrentUser);
  const [postAvatarUser, { isError: isErrorPostAvatar, isLoading: isLoadingPostAvatar }] = usePostAvatarUserMutation();
  const [deleteAvatarUser, { isError: isErrorDeleteAvatar, isLoading: isLoadingDeleteAvatar }] =
    useDeleteAvatarUserMutation();
  const {
    data: avatarData,
    isError: isErrorGerAvatar,
    isFetching: isFetchingGetAvatar,
  } = useGetAvatarUserQuery(user.id, { skip: !user.id });

  const avatarValue = avatarData?.userPicture || '';

  const onSubmit = (values) => {
    const { avatar } = values;
    postAvatarUser({
      userId: user.id,
      avatar: avatar,
    });
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      avatar: avatarValue,
    },
    validationSchema: StepAvatarSchema,
    onSubmit,
  });

  const handleDeleteAvatar = () => {
    if (avatarValue) {
      deleteAvatarUser(user.id);
      formik.setFieldValue('avatar', '');
    }
  };

  const handleAvatarChange = (img) => {
    formik.setFieldValue('avatar', img);
  };

  const handleChangeDirty = (img) => {
    formik.setFieldValue('avatar', img);
  };

  if (isErrorGerAvatar || isErrorPostAvatar || isErrorDeleteAvatar) {
    return <ErrorComponent />;
  }

  if (isFetchingGetAvatar || isLoadingPostAvatar || isLoadingDeleteAvatar) {
    return <StepAvatarSkeleton />;
  }

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <LoadImages
            handleBlur={formik.handleBlur}
            handleChange={handleAvatarChange}
            handlerDelete={handleDeleteAvatar}
            isDisabled={!formik.dirty}
            value={avatarValue}
            onChange={handleChangeDirty}
          />
        </Box>
      </form>
    </Box>
  );
};

export default StepAvatar;
