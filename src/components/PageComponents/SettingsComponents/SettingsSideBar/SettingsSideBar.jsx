import { Box, Link, Typography } from '@mui/material';
import { FormInputSearch } from '@components/FormsComponents/Inputs/index.js';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';
import navigationLinks from '@router/links.js';
import { styles } from './SettingsSideBar.styles';

const SettingsSideBar = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h4' variant='h4'>
        {t('settings.sideBar.title')}
      </Typography>
      <FormInputSearch
        autoComplete='off'
        name='query'
        placeholder={'Пошук налаштувань'}
        sx={styles.input}
        type='text'
        // value={query}
        // onBlur={handleBlur}
        // onChange={handleChange}
      />
      <Box>
        <Link component={RouterLink} to={navigationLinks.generalSettings}>
          Загальні налаштування
        </Link>
        <Link component={RouterLink} to={navigationLinks.notificationsSettings}>
          Сповіщення
        </Link>
      </Box>
    </Box>
  );
};

export default SettingsSideBar;
