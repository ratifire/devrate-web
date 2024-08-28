import * as React from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import styles from './Menu.styles';
import { Link as RouterLink } from 'react-router-dom';
import links from './profileRoutes';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useLogoutMutation } from '../../../redux/auth/authApiSlice';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authSlice';

const Menu = ({ isDrawerOpen, toggleDrawer }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
      Cookies.remove('JSESSIONID');
      dispatch(logOut());
      window.location.reload();
    } catch (error) {
      console.log('Logout failed:', error);
    }
  };

  return (
    <>
      <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={styles.userMenuBox} role='presentation'>
          <Box sx={styles.upperMenu}>
            <Typography variant='h5' component='div'>
              Account
            </Typography>
            <IconButton sx={styles.menuLinkBtn} onClick={toggleDrawer}>
              <EastIcon sx={styles.menuLink} />
            </IconButton>
          </Box>

          {links.map((link, index) => (
            <React.Fragment key={link.path}>
              <Link
                key={link.path}
                to={link.path}
                component={RouterLink}
                sx={styles.menuLink}
                target={link.target}
                {...(link.name === 'profile.userMenu.logout' ? { onClick: logoutHandler } : {})}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={styles.listItemButton}>
                    <ListItemIcon>
                      <link.icon sx={styles.iconItem} />
                    </ListItemIcon>
                    <ListItemText primary={t(link.name)} />
                  </ListItemButton>
                </ListItem>
              </Link>
              {index % 2 !== 0 && <Divider key={index} sx={styles.divider} />}
            </React.Fragment>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

Menu.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Menu;
