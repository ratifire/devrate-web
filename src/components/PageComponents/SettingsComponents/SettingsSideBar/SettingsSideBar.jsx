import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { FormInputSearch } from '@components/FormsComponents/Inputs/index.js';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import navigationLinks from '@router/links.js';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
      <List sx={styles.list}>
        <ListItem sx={styles.listItem}>
          <Link component={NavLink} to={navigationLinks.generalSettings}>
            {t('settings.sideBar.links.generalSettings')}
            <KeyboardArrowRightIcon />
          </Link>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Link component={NavLink} to={navigationLinks.notificationsSettings}>
            {t('settings.sideBar.links.notificationsSettings')}
            <KeyboardArrowRightIcon />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default SettingsSideBar;
