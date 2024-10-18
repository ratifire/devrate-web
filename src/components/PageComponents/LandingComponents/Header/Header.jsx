import React, { useState } from 'react';
import { AppBar, Box, Container, Divider, Drawer, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.styles';
import LinkList from '../../../UI/LinkList';
import navLinks from '../../../../utils/constants/navLinks';
import Logo from '../../../UI/Logo';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { openModal } from '../../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import navigationsLinks from '../../../../router/links';
import useAuth from '../../../../utils/hooks/useAuth';

const Header = () => {
  useAuth();
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal({ modalName: 'openLogin' }));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlerDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isAuthenticated = useSelector((state) => state.auth.user?.isAuthenticated || false);
  const myProfile = () => {
    if (!isAuthenticated)
      return <ButtonDef
        variant='text'
        handlerClick={handleOpen}
        type='button'
        label='home.links.login' />;
    return (
      <Link to={navigationsLinks.profile} component={RouterLink} sx={styles.link}>
        Profile
      </Link>
    );
  };
  const drawer = (
    <Box onClick={handlerDrawerToggle} sx={styles.drawer}>
      <Box sx={styles.logoMobileBox}>
        <Logo width={'187'} height={'22'} />
      </Box>
      <Divider />
      <Box sx={styles.headerNavMobile}>
        <LinkList links={navLinks} componentStyles={styles} />
      </Box>
    </Box>
  );
  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Container maxWidth='xl' sx={styles.container}>
        <Box>
          <Toolbar disableGutters sx={styles.toolbar}>
            <IconButton
              color='primary'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr: '15px',
                display: { md: 'none' },
              }}
              onClick={handlerDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={styles.logoBox}>
              <Logo width={'187'} height={'22'} />
            </Box>
            <Box sx={styles.headerNav}>
              <LinkList links={navLinks} componentStyles={styles} />
              {myProfile()}
            </Box>
          </Toolbar>
          <Box component='nav'>
            <Drawer
              variant='temporary'
              open={mobileOpen}
              onClose={handlerDrawerToggle}
              sx={{
                display: { sm: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: '80wh',
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
