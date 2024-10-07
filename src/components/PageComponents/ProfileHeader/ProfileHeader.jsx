import React from 'react';
import { AppBar, Badge, Box, Button, IconButton } from '@mui/material';
import styles from './ProfileHeader.styles';
import Logo from '../../UI/Logo';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import UserAvatar from '../../UI/UserAvatar';
import Menu from '../Menu';
import NotificationList from '../ProfileComponents/PersonalProfile/NotificationList';
import { useSelector } from 'react-redux';
import { useGetAvatarUserQuery } from '../../../redux/user/avatar/avatarApiSlice';
import { selectCurrentUser } from '../../../redux/auth/authSlice';
import { useGetPersonalUserQuery } from '../../../redux/user/personal/personalApiSlice';
import { Link } from 'react-router-dom';
import links from '../../../router/links';
import ThemeSwitch from "../../UI/ThemeSwitch/ThemeSwitch";
import { InputSearch } from './InputSearch';

const notifications = [
  {
    id: '1',
    title: 'Олег Козаченко надіслав(-ла) Вам запит на спілкування!',
    date: '6 годин тому',
    new: false,
    type: 'warning',
  },
  {
    id: '2',
    title: 'Олег Козаченко надіслав(-ла) Вам запит на спілкування!',
    date: '6 годин тому',
    new: true,
    type: 'info',
  },
  {
    id: '3',
    title: 'Олег Козаченко надіслав(-ла) Вам запит на спілкування!',
    date: '6 годин тому',
    new: true,
    type: 'info',
  },
  {
    id: '4',
    title: 'Олег Козаченко надіслав(-ла) Вам запит на спілкування!',
    date: '6 годин тому',
    new: true,
    type: 'message',
  },
];

const ProfileHeader = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id, firstName, lastName } = info;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
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

  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Box sx={styles.logoBox}>
        <Link to={links.profile}>
          <Logo width={'187'} height={'22'} />
        </Link>
      </Box>
      <Box sx={styles.headerNav}>
        <InputSearch />
        <ThemeSwitch/>
        <NotificationList items={notifications} />
        <IconButton>
          <Badge color='error' overlap='circular' badgeContent='' variant='dot' invisible={true}>
            <Message />
          </Badge>
        </IconButton>
        <Button sx={styles.userPhoto} onClick={toggleDrawer}>
          <UserAvatar
            userFirstName={getFirstName || firstName}
            userLastName={getLastName || lastName}
            userName={`${getFirstName || firstName} ${getLastName || lastName}`}
            src={userPicture}
            size='sm'
          />
        </Button>
        <Menu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Box>
    </AppBar>
  );
};

export default ProfileHeader;
