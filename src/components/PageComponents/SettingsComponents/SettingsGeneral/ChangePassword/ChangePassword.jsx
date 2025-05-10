import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { changeEmailAndPasswordStyles as styles } from '@components/PageComponents/SettingsComponents/SettingsGeneral/styles';
import { FormInput } from '@components/FormsComponents/Inputs/index.js';
import { ButtonDef } from '@components/FormsComponents/Buttons/index.js';
import { useState } from 'react';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Typography component='h5' variant='h5'>
        {t('settings.general.changePassword.title')}
      </Typography>
      <Box component='form'>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            clickHandler={handleShowPassword}
            label='settings.general.changePassword.oldPasswordLabel'
            name='oldPassword'
            placeholder='settings.general.changePassword.oldPasswordPlaceholder'
            showPassword={showPassword}
            type='password'
          />
        </Box>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            clickHandler={handleShowPassword}
            label='settings.general.changePassword.newPasswordLabel'
            name='newPassword'
            placeholder='settings.general.changePassword.newPasswordPlaceholder'
            showPassword={showPassword}
            type='password'
          />
        </Box>
        <Box sx={styles.inputBox}>
          <FormInput
            required
            autoComplete='off'
            clickHandler={handleShowPassword}
            label='settings.general.changePassword.repeatNewPasswordLabel'
            name='repeatNewPassword'
            placeholder='settings.general.changePassword.repeatNewPasswordPlaceholder'
            showPassword={showPassword}
            type='password'
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

export default ChangePassword;
