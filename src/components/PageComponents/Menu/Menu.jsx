import * as React from 'react';
import {
  Box,
  Button,
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
import { Link as RouterLink } from 'react-router';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { useLogoutMutation } from '../../../redux/auth/authApiSlice';
import FeedbackProjectModal from '../../../components/ModalsComponents/FeedbackProjectModal';
import { modalNames } from '../../../utils/constants/modalNames.js';
import { useModalController } from '../../../utils/hooks/useModalController.js';
import { closeChat } from '../../../redux/chat/chatSlice.js';
import links from './profileRoutes';
import styles from './Menu.styles';

const Menu = ({ isDrawerOpen, toggleDrawer, closeMenu }) => {
  const { t } = useTranslation();
  const feedbackProjectModal = useSelector((state) => state.modal.feedbackProjectModal);
  const { openModal } = useModalController();

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Logout failed:', error);
    }
  };

  const handleOpenFeedbackModal = () => {
    openModal(modalNames.feedbackProjectModal);
  };

  const handleLinkClick = async (link) => {
    if (link.name === 'profile.userMenu.logout') {
      dispatch(closeChat());
      await logoutHandler();
    }
    closeMenu();
  };

  return (
    <>
      <Drawer anchor='right' open={isDrawerOpen} sx={styles.bg} onClose={toggleDrawer}>
        <Box role='presentation' sx={styles.userMenuBox}>
          <Box sx={styles.upperMenu}>
            <Typography component='div' variant='h5'>
              Account
            </Typography>
            <IconButton sx={styles.menuLinkBtn} onClick={toggleDrawer}>
              <EastIcon sx={styles.menuLink} />
            </IconButton>
          </Box>

          {links.map((link, index) => (
            <React.Fragment key={link.path}>
              <Link
                component={RouterLink}
                sx={styles.menuLink}
                target={link.target}
                to={link.path}
                onClick={() => handleLinkClick(link)}
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
              {index % 2 !== 0 && <Divider sx={styles.divider} />}
            </React.Fragment>
          ))}
          <Button
            startIcon={<ForumOutlinedIcon sx={styles.iconItem} />}
            sx={styles.btnFeedback}
            type='button'
            variant='text'
            onClick={handleOpenFeedbackModal}
          >
            <Typography sx={styles.btnText} variant='h6'>
              {t('profile.userMenu.leaveAFeedback')}
            </Typography>
          </Button>
        </Box>
      </Drawer>

      {feedbackProjectModal && <FeedbackProjectModal />}
    </>
  );
};

Menu.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
