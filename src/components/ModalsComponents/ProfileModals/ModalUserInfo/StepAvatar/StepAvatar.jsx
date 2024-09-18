import { Box } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../../redux/auth/authSlice'
import {
  useDeleteAvatarUserMutation,
  useGetAvatarUserQuery,
  usePostAvatarUserMutation,
} from '../../../../../redux/user/avatar/avatarApiSlice'
import { StepAvatarSchema } from '../../../../../utils/valadationSchemas/index'
import LoadImages from '../../../../UI/LoadImages'
import { styles } from './StepAvatar.styles'

const initialValues = {
  avatar: '',
};

const StepAvatar = () => {
  const { data: user } = useSelector(selectCurrentUser);

  const [postAvatarUser] = usePostAvatarUserMutation();
  const [deleteAvatarUser] = useDeleteAvatarUserMutation();
  const { data: avatarData, isSuccess } = useGetAvatarUserQuery(user.id);

  const avatarValue = avatarData?.userPicture || '';

  const onSubmit = (values) => {
    const { avatar } = values;
    postAvatarUser({
      userId: user.id,
      avatar: avatar,
    });
  };

  const formik = useFormik({
    initialValues,
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

  useEffect(() => {
    if (isSuccess && avatarValue && !formik.values.avatar) {
      formik.setFieldValue('avatar', avatarValue);
    }
  }, [isSuccess, avatarValue, formik.values.avatar]);

  return (
    <Box sx={styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.input100}>
          <LoadImages
            handleChange={handleAvatarChange}
            handleBlur={formik.handleBlur}
            handlerDelete={handleDeleteAvatar}
            value={avatarValue}
          />
        </Box>
      </form>
    </Box>
  );
};

export default StepAvatar;
