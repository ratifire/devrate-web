import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { FormInput } from '@components/FormsComponents/Inputs/index.js';
import { changeEmailAndPasswordStyles as styles } from '@components/PageComponents/SettingsComponents/SettingsGeneral/styles';
import { useSnackbar } from 'notistack';
import { useUpdateEmailMutation } from '@redux/api/slices/profileSettings/profileSettingsApiSlice';
import { ChangeEmailSkeleton } from '@components/UI/Skeleton';
import { useFormik } from 'formik';
import { ChangeEmailSchema } from '@utils/validationSchemas/index.js';

const initialValues = {
  currentEmail: '',
  newEmail: '',
};

const ChangeEmail = () => {
  const { t } = useTranslation();
  const [updateEmail, { isLoading }] = useUpdateEmailMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async ({ currentEmail, newEmail }) => {
    try {
      await updateEmail({ currentEmail, newEmail }).unwrap();
      enqueueSnackbar(t('settings.general.changeEmail.notification.success'), {
        variant: 'success',
      });
    } catch (error) {
      if (error?.status === 409) {
        enqueueSnackbar(t('settings.general.changeEmail.notification.userAlreadyExists'), {
          variant: 'error',
        });
      }

      enqueueSnackbar(t('settings.general.changeEmail.notification.error'), {
        variant: 'error',
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ChangeEmailSchema,
    onSubmit,
  });

  const handleCancelChangeEmail = () => {
    formik.resetForm();
  };

  if (isLoading) {
    return <ChangeEmailSkeleton />;
  }

  const isDisabledSubmit = !formik.isValid || formik.isSubmitting || !formik.dirty;
  const isDisabledCancel = !formik.values.newEmail && !formik.values.currentEmail;

  return (
    <>
      <Typography component='h5' variant='h5'>
        {t('settings.general.changeEmail.title')}
      </Typography>
      <Box component='form' onSubmit={formik.handleSubmit}>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            error={formik.touched.currentEmail && Boolean(formik.errors.currentEmail)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.currentEmail && formik.errors.currentEmail}
            label='settings.general.changeEmail.oldEmailLabel'
            name='currentEmail'
            placeholder='settings.general.changeEmail.oldEmailPlaceholder'
            type='email'
            value={formik.values.currentEmail}
          />
        </Box>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            error={formik.touched.newEmail && Boolean(formik.errors.newEmail)}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            helperText={formik.touched.newEmail && formik.errors.newEmail}
            label='settings.general.changeEmail.newEmailLabel'
            name='newEmail'
            placeholder='settings.general.changeEmail.newEmailPlaceholder'
            type='email'
            value={formik.values.newEmail}
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
            type='button'
            variant='outlined'
            onClick={handleCancelChangeEmail}
          />
        </Box>
      </Box>
    </>
  );
};

export default ChangeEmail;
