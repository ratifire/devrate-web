import { AppBar, Box } from '@mui/material';
import { Link } from 'react-router';
import links from '@router/links';
import Logo from '@components/UI/Logo';
import ThemeSwitch from '@components/UI/ThemeSwitch/ThemeSwitch';
import Notification from '../Notification';
import Chat from '../Chat';
import { InputSearch } from './InputSearch';
import styles from './ProfileHeader.styles';

const ProfileHeader = () => {
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
      </Box>
    </AppBar>
  );
};

export default ProfileHeader;
