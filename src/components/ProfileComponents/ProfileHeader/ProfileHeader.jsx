import React from 'react';
import { AppBar, Badge, Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import styles from './ProfileHeader.styles';
import Logo from '../../UI/Logo';

import { ReactComponent as BellNotification } from '../../../assets/icons/bell.svg'; // import { ReactComponent as LoupeSearch } from '../../../assets/icons/loupe.svg';
import { ReactComponent as Message } from '../../../assets/icons/message.svg';
import { ReactComponent as Loupe } from '../../../assets/icons/loupe.svg';

import userImage from '../../../assets/userPhotoSample.png';
import { useFormik } from 'formik';

const initialValues = {
  query: '',
};

function ProfileHeader() {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  async function onSubmit(values, { resetForm }) {
    try {
      resetForm();
      console.log(values);
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
            sx={{
              '& .MuiOutlinedInput-input': {
                paddingY: '8px!important',
                paddingX: '12px!important',
              },
              width: 276,
            }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton type='submit' onClick={formik.handleSubmit} edge='end'>
                  <Loupe />
                </IconButton>
              </InputAdornment>
            }
          />
        </form>
        <IconButton>
          <Badge color='error' overlap='circular' badgeContent=' ' variant='dot' invisible={false}>
            <BellNotification />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge color='error' overlap='circular' badgeContent='' variant='dot' invisible={true}>
            <Message />
          </Badge>
        </IconButton>
        <Box component='img' sx={styles.userPhoto} alt='userPhoto' src={userImage} />
      </Box>
    </AppBar>
  );
}

export default ProfileHeader;
