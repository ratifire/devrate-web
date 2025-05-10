import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { FormInput } from '@components/FormsComponents/Inputs/index.js';
import { changeEmailAndPasswordStyles as styles } from '@components/PageComponents/SettingsComponents/SettingsGeneral/styles';

const ChangeEmail = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography component='h5' variant='h5'>
        {t('settings.general.changeEmail.title')}
      </Typography>
      <Box component='form'>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            label='settings.general.changeEmail.oldEmailLabel'
            name='email'
            placeholder='settings.general.changeEmail.oldEmailPlaceholder'
            type='email'
          />
        </Box>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            label='settings.general.changeEmail.newEmailLabel'
            name='email'
            placeholder='settings.general.changeEmail.newEmailPlaceholder'
            type='email'
          />
        </Box>
        <Box sx={styles.btnBox}>
          <ButtonDef disabled label={t('settings.general.common.save')} type='submit' variant='contained' />
          <ButtonDef disabled label={t('settings.general.common.cancel')} variant='outlined' />
        </Box>
      </Box>
    </>
  );
};

export default ChangeEmail;
