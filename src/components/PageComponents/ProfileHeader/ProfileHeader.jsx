import { AppBar, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import { useGetAvatarUserQuery } from '../../../redux/user/avatar/avatarApiSlice';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';
import links from '../../../router/links';
import { FeedbackInterviewModal } from '../../ModalsComponents/FeedbackModal/FeedbackInterviewModal';
import Logo from '../../UI/Logo';
import ThemeSwitch from '../../UI/ThemeSwitch/ThemeSwitch';
import UserAvatar from '../../UI/UserAvatar';
import Menu from '../Menu';
import Notification from '../Notification';
import Chat from '../Chat';
import { selectModalData } from '../../../redux/modal/modalSlice.js';
import { InputSearch } from './InputSearch';
import styles from './ProfileHeader.styles';

const ProfileHeader = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const open = useSelector(selectModalData);
  const { id, firstName, lastName } = info;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { data: personalData } = useGetPersonalUserQuery(id);
  const { firstName: getFirstName, lastName: getLastName } = personalData || {};

  const { data } = useGetAvatarUserQuery(id);
  const userAvatar = data || {};
  const { userPicture } = userAvatar;

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
          <UserAvatar
            radius='square'
            size='sm'
            src={userPicture}
            userFirstName={getFirstName || firstName}
            userLastName={getLastName || lastName}
            userName={`${getFirstName || firstName} ${getLastName || lastName}`}
          />
        </Button>
        <Menu closeMenu={handleCloseMenu} isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Box>
      {open?.feedbackId && <FeedbackInterviewModal />}
    </AppBar>
  );
};

export default ProfileHeader;
