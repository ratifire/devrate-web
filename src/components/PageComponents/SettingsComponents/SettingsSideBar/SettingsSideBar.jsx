import { Link, List, ListItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import navigationLinks from '@router/links.js';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styles } from './SettingsSideBar.styles';

const SettingsSideBar = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography component='h4' variant='h4'>
        {t('settings.sideBar.title')}
      </Typography>
      <List>
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
    </>
  );
};

export default SettingsSideBar;
