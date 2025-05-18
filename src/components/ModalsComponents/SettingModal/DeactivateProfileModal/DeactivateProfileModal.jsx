import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { DeactivateProfileModalSchema } from '@utils/validationSchemas';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useModalController } from '@utils/hooks/useModalController';
import { useDeactivatedAccountMutation } from '@redux/api/slices/profileSettings/profileSettingsApiSlice';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { logOut } from '@redux/slices/auth/authSlice';
import { clearTokens } from '@redux/slices/auth/tokenSlice';
import { setDarkTheme } from '@redux/slices/theme/themeSlice';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import { styles } from './DeactivateProfileModal.styles';

const DeactivateProfileModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { closeModal } = useModalController();
  const [deactivateAccount, { isLoading }] = useDeactivatedAccountMutation();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async () => {
    try {
      await deactivateAccount().unwrap();

      enqueueSnackbar(t('modal.deactivated.notification.success'), {
        variant: 'success',
      });

      closeModal();
      dispatch(logOut());
      dispatch(clearTokens());
      dispatch(setDarkTheme());
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modal.deactivated.notification.error'), {
        variant: 'error',
      });
    }
  };

  const formik = useFormik({
    onSubmit,
    initialValues: {
      checkbox: false,
    },
    validationSchema: DeactivateProfileModalSchema,
  });

  const handleCancel = () => {
    closeModal();
  };

  const idDisabled = !formik.values.checkbox;

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' variant='h6'>
        {t('modal.deactivated.title')}
      </Typography>
      <Typography component='p' sx={styles.description} variant='caption3'>
        {t('modal.deactivated.description')}
      </Typography>
      <Box component='form' sx={styles.form} onSubmit={formik.handleSubmit}>
        <FormCheckbox
          changeHandler={formik.handleChange}
          checked={formik.values.checkbox}
          label={t('modal.deactivated.agree')}
          name='checkbox'
        />
        <Box sx={styles.boxBtn}>
          <ButtonDef
            label={t('settings.general.common.cancel')}
            sx={styles.cancel}
            type='button'
            variant='test'
            onClick={handleCancel}
          />
          <ButtonDef
            disabled={idDisabled}
            label={t('settings.general.common.deactivate')}
            loading={isLoading}
            sx={styles.deactivate}
            type='submit'
            variant='contained'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DeactivateProfileModal;
