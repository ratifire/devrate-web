import { AppBar, Box, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router';
import links from '@router/links';
import Logo from '@components/UI/Logo';
import ThemeSwitch from '@components/UI/ThemeSwitch/ThemeSwitch';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Menu from '../Menu';
import Notification from '../Notification';
import Chat from '../Chat';
import { InputSearch } from './InputSearch';
import styles from './ProfileHeader.styles';

const ProfileHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseMenu = () => {
    setIsDrawerOpen(false);
  };

  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Box sx={styles.logoBox}>
        <Link to={links.profile}>
          <Logo height={'44'} width={'187'} />
        </Link>
      </Box>
      <Box sx={styles.headerNav}>
        <InputSearch />
        <ThemeSwitch />
        <Notification />
        <Chat />
        <Button sx={styles.userPhoto} onClick={toggleDrawer}>
          <DehazeIcon sx={styles.dehazeIcon} />
        </Button>
        <Menu closeMenu={handleCloseMenu} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Box>
    </AppBar>
  );
};

export default ProfileHeader;
