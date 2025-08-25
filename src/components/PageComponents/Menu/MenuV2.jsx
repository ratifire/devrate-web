import * as React from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { useLogoutMutation } from '@redux/api/slices/auth/authApiSlice';
import { useModalController } from '@utils/hooks/useModalController';
import { modalNames } from '@utils/constants/modalNames';
import { closeChat } from '@redux/slices/chat/chatSlice';
import { selectCurrentUser } from '@redux/slices/auth/authSlice.js';
import UserAvatar from '@components/UI/UserAvatar';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import { useEffect, useState } from 'react';
import links from './profileRoutes';
import styles from './MenuV2.styles';

const MenuV2 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { openModal } = useModalController();
  const [logout] = useLogoutMutation();

  const currentUser = useSelector(selectCurrentUser) || {};
  const { id, firstName, lastName } = currentUser.data || {};
  const { data: avatarData } = useGetAvatarUserQuery(id, { skip: !id });
  const { userPicture } = avatarData || {};

  const savedOpenState = localStorage.getItem('menuOpen') === 'true';
  const [open, setOpen] = useState(savedOpenState);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (screenWidth >= 1400 && !open) {
      setOpen(true);
      localStorage.setItem('menuOpen', true);
    } else if (screenWidth < 1400 && open) {
      setOpen(false);
      localStorage.setItem('menuOpen', false);
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrawerToggle = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    localStorage.setItem('menuOpen', newOpenState);
  };

  const logoutHandler = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Logout failed:', error);
    }
  };

  const handleLinkClick = async (link) => {
    if (link.name === 'profile.userMenu.logout') {
      dispatch(closeChat());
      await logoutHandler();
    }
    if (open) {
      setOpen(false);
      localStorage.setItem('menuOpen', false);
    }
  };

  const handleOpenFeedbackModal = () => {
    openModal(modalNames.feedbackProjectModal);
  };

  const menuLinks = links.filter((link) => link.name !== 'profile.userMenu.logout');
  const logoutLink = links.find((link) => link.name === 'profile.userMenu.logout');

  return (
    <Drawer open={open} sx={styles.drawer(open)} variant='permanent'>
      <Box sx={styles.drawerContainer}>
        {open && (
          <Box sx={styles.drawerHeader(open)}>
            <Typography noWrap sx={styles.logoText} variant='h6'>
              Menu
            </Typography>
            <IconButton sx={styles.collapseButton} onClick={handleDrawerToggle}>
              <KeyboardTabIcon sx={{ transform: 'rotate(180deg)' }} />
            </IconButton>
          </Box>
        )}

        <List sx={styles.list}>
          {!open && (
            <ListItem disablePadding sx={styles.listItem}>
              <ListItemButton sx={styles.listItemButton(open)} onClick={handleDrawerToggle}>
                <Tooltip arrow placement='right' title={t('profile.userMenu.tooltip.openMenu')}>
                  <ListItemIcon sx={styles.listItemIcon}>
                    <KeyboardTabIcon />
                  </ListItemIcon>
                </Tooltip>
              </ListItemButton>
            </ListItem>
          )}

          {menuLinks.map((link, index) => (
            <React.Fragment key={link.path}>
              <Tooltip arrow placement='right' title={!open ? t(link.name) : ''}>
                <ListItem disablePadding sx={styles.listItem}>
                  <ListItemButton
                    component={RouterLink}
                    selected={location.pathname === link.path}
                    sx={styles.listItemButton(open)}
                    to={link.path}
                    onClick={() => handleLinkClick(link)}
                  >
                    <ListItemIcon sx={styles.listItemIcon}>
                      {link.name === 'profile.userMenu.profile' ? (
                        <UserAvatar
                          correctStyle={styles.avatar(open)}
                          radius='circle'
                          size={open ? 'm' : 'l'}
                          src={userPicture}
                          userFirstName={firstName || ''}
                          userLastName={lastName || ''}
                        />
                      ) : (
                        <link.icon />
                      )}
                    </ListItemIcon>
                    {open && <ListItemText primary={t(link.name)} sx={styles.listItemText} />}
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              {(index === 1 || index === 3 || index === 5) && <Divider sx={styles.divider} />}
            </React.Fragment>
          ))}

          <Tooltip arrow placement='right' title={!open ? t('profile.userMenu.leaveAFeedback') : ''}>
            <ListItem disablePadding sx={styles.listItem}>
              <ListItemButton sx={styles.listItemButton(open)} onClick={handleOpenFeedbackModal}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <ForumOutlinedIcon />
                </ListItemIcon>
                {open && <ListItemText primary={t('profile.userMenu.leaveAFeedback')} sx={styles.listItemText} />}
              </ListItemButton>
            </ListItem>
          </Tooltip>

          {logoutLink && (
            <Tooltip arrow placement='right' title={!open ? t(logoutLink.name) : ''}>
              <ListItem disablePadding sx={styles.listItem}>
                <ListItemButton
                  component={RouterLink}
                  sx={styles.listItemButton(open)}
                  to={logoutLink.path}
                  onClick={() => handleLinkClick(logoutLink)}
                >
                  <ListItemIcon sx={styles.listItemIcon}>
                    <logoutLink.icon />
                  </ListItemIcon>
                  {open && <ListItemText primary={t(logoutLink.name)} sx={styles.listItemText} />}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default MenuV2;
