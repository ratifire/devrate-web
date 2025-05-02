import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import {
  useDeleteAvatarUserMutation,
  useGetAvatarUserQuery,
  usePostAvatarUserMutation,
} from '@redux/api/slices/user/avatar/avatarApiSlice';
import LoadImages from '@components/UI/LoadImages';
import { ErrorComponent } from '@components/UI/Exceptions';
import { StepAvatarSkeleton } from '@components/UI/Skeleton';
import useStepHandler from '@utils/hooks/useStepHandler.js';
import { styles } from './StepAvatar.styles';

const StepAvatar = () => {
  const { handleNext } = useStepHandler();
  const { data: user } = useSelector(selectCurrentUser);
  const [postAvatarUser, { isError: isErrorPostAvatar, isLoading: isLoadingPostAvatar }] = usePostAvatarUserMutation();
  const [deleteAvatarUser, { isError: isErrorDeleteAvatar, isLoading: isLoadingDeleteAvatar }] =
    useDeleteAvatarUserMutation();
  const {
    data: avatarData,
    isError: isErrorGerAvatar,
    isFetching: isFetchingGetAvatar,
  } = useGetAvatarUserQuery(user.id, { skip: !user.id });
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const avatarValue = avatarData?.userPicture || '';

  const onSubmit = async (values) => {
    try {
      const { avatar } = values;
      await postAvatarUser({
        userId: user.id,
        avatar,
      }).unwrap();
      const messageKey = avatarValue ? 'modalNotifyText.avatar.edit.success' : 'modalNotifyText.avatar.create.success';

      enqueueSnackbar(t(messageKey), { variant: 'success' });
      handleNext();
      formik.resetForm();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      const errorKey = avatarValue ? 'modalNotifyText.avatar.edit.error' : 'modalNotifyText.avatar.create.error';

      enqueueSnackbar(t(errorKey), { variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues: {
      avatar: avatarValue,
    },
    onSubmit,
  });

  const handleDeleteAvatar = async () => {
    if (avatarValue) {
      try {
        await deleteAvatarUser(user.id).unwrap();
        enqueueSnackbar(t('modalNotifyText.avatar.delete.success'), { variant: 'success' });
        await formik.setFieldValue('avatar', '');
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        enqueueSnackbar(t('modalNotifyText.avatar.delete.error'), { variant: 'error' });
      }
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
