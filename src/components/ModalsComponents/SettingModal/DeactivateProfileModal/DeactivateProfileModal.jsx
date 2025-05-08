import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { DeactivateProfileModalSchema } from '@utils/validationSchemas';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { useModalController } from '@utils/hooks/useModalController';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import { styles } from './DeactivateProfileModal.styles';

const DeactivateProfileModal = () => {
  const { t } = useTranslation();
  const { closeModal } = useModalController();

  const formik = useFormik({
    initialValues: {
      checkbox: false,
    },
    validationSchema: DeactivateProfileModalSchema,
  });

  const handleCancel = () => {
    closeModal();
  };

  const disable = !formik.values.checkbox;

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' variant='h6'>
        {t('modal.deactivated.title')}
      </Typography>
      <Typography component='p' sx={styles.description} variant='caption3'>
        {t('modal.deactivated.description')}
      </Typography>
      <Box component='form' sx={styles.form}>
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
            variant='text'
            onClick={handleCancel}
          />
          <ButtonDef
            disabled={disable}
            label={t('settings.general.common.deactivate')}
            sx={styles.deactivate}
            variant='contained'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DeactivateProfileModal;
