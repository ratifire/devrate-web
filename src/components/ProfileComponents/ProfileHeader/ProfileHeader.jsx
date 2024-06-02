import React from 'react';
import { AppBar, Badge, Box, Button, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import styles from './ProfileHeader.styles';
import Logo from '../../UI/Logo';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import { ReactComponent as Loupe } from '../../../assets/icons/loupe.svg';
import { useFormik } from 'formik';
import UserAvatar from '../../UI/UserAvatar';
import UserMenu from '../UserMenu';
import NotificationList from '../NotificationList';
import { useSelector } from 'react-redux';

const initialValues = {
  query: '',
};

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

function ProfileHeader() {
  const { firstName, lastName } = useSelector((state) => state.auth.user.data);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(!isDrawerOpen);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  async function onSubmit(values, { resetForm }) {
    try {
      resetForm();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Box sx={styles.logoBox}>
        <Logo width={'187'} height={'22'} />
      </Box>
      <Box sx={styles.headerNav}>
        <form onSubmit={formik.handleSubmit}>
          <OutlinedInput
            autoComplete='off'
            name='query'
            placeholder='Пошук'
            type='text'
            value={formik.values.query}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={styles.input}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton type='submit' onClick={formik.handleSubmit} edge='end'>
                  <Loupe />
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
        <NotificationList items={notifications} />
        <IconButton>
          <Badge color='error' overlap='circular' badgeContent='' variant='dot' invisible={true}>
            <Message />
          </Badge>
        </IconButton>
        <Button sx={styles.userPhoto} onClick={toggleDrawer}>
          <UserAvatar userName={`${firstName} ${lastName}`} size='sm' />
        </Button>
        <UserMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Box>
    </AppBar>
  );
}

export default ProfileHeader;
