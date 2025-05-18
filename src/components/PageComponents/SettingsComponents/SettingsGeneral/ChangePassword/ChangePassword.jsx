import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { changeEmailAndPasswordStyles as styles } from '@components/PageComponents/SettingsComponents/SettingsGeneral/styles';
import { FormInput } from '@components/FormsComponents/Inputs';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useState } from 'react';
import { useUpdatePasswordMutation } from '@redux/api/slices/profileSettings/profileSettingsApiSlice';
import { ChangePasswordSkeleton } from '@components/UI/Skeleton';
import { useFormik } from 'formik';
import { ChangePasswordSchema } from '@utils/validationSchemas';
import { useSnackbar } from 'notistack';

const initialValues = {
  currentPassword: '',
  newPassword: '',
  repeatNewPassword: '',
};

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async ({ currentPassword, newPassword }) => {
    try {
      await updatePassword({ currentPassword, newPassword }).unwrap();
      enqueueSnackbar(t('settings.general.changePassword.notification.success'), {
        variant: 'success',
      });
    } catch (err) {
      if (err?.status === 400) {
        return enqueueSnackbar(t('settings.general.changePassword.notification.error'), {
          variant: 'error',
        });
      }

      enqueueSnackbar(t('settings.general.changePassword.notification.errorServer'), {
        variant: 'error',
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ChangePasswordSchema,
  });

  const handleCancelChangePassword = () => {
    formik.resetForm();
  };

  if (isLoading) {
    return <ChangePasswordSkeleton />;
  }

  const isDisabledSubmit = !formik.isValid || formik.isSubmitting || !formik.dirty;
  const isDisabledCancel =
    !formik.values.currentPassword && !formik.values.newPassword && !formik.values.repeatNewPassword;

  return (
    <>
      <Typography component='h5' variant='h5'>
        {t('settings.general.changePassword.title')}
      </Typography>
      <Box component='form' onSubmit={formik.handleSubmit}>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            clickHandler={handleShowPassword}
            error={formik.touched.currentPassword && Boolean(formik.errors.currentPassword)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.currentPassword && formik.errors.currentPassword}
            label='settings.general.changePassword.oldPasswordLabel'
            name='currentPassword'
            placeholder='settings.general.changePassword.oldPasswordPlaceholder'
            showPassword={showPassword}
            type='password'
            value={formik.values.currentPassword}
          />
        </Box>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            clickHandler={handleShowPassword}
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            label='settings.general.changePassword.newPasswordLabel'
            name='newPassword'
            placeholder='settings.general.changePassword.newPasswordPlaceholder'
            showPassword={showPassword}
            type='password'
            value={formik.values.newPassword}
          />
        </Box>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            clickHandler={handleShowPassword}
            error={formik.touched.repeatNewPassword && Boolean(formik.errors.repeatNewPassword)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.repeatNewPassword && formik.errors.repeatNewPassword}
            label='settings.general.changePassword.repeatNewPasswordLabel'
            name='repeatNewPassword'
            placeholder='settings.general.changePassword.repeatNewPasswordPlaceholder'
            showPassword={showPassword}
            type='password'
            value={formik.values.repeatNewPassword}
          />
        </Box>
        <Box sx={styles.btnBox}>
          <ButtonDef
            disabled={isDisabledSubmit}
            label={t('settings.general.common.save')}
            type='submit'
            variant='contained'
          />
          <ButtonDef
            disabled={isDisabledCancel}
            label={t('settings.general.common.cancel')}
            variant='outlined'
            onClick={handleCancelChangePassword}
          />
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;
