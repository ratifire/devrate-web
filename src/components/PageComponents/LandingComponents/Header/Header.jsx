import React, { useState } from 'react';
import { AppBar, Box, Container, Divider, Drawer, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import LinkList from '../../../UI/LinkList';
import navLinks from '../../../../utils/constants/navLinks';
import Logo from '../../../UI/Logo';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { openModal } from '../../../../redux/modal/modalSlice';
import navigationsLinks from '../../../../router/links';
import styles from './Header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal({ modalName: 'openLogin' }));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handlerDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const isAuthenticated = useSelector((state) => state.auth.user?.isAuthenticated || false);
  const myProfile = () => {
    if (!isAuthenticated)
      return <ButtonDef handlerClick={handleOpen} label='home.links.login' type='button' variant='text' />;
    return (
      <Link component={RouterLink} sx={styles.link} to={navigationsLinks.profile}>
        Profile
      </Link>
    );
  };
  const drawer = (
    <Box sx={styles.drawer} onClick={handlerDrawerToggle}>
      <Box sx={styles.logoMobileBox}>
        <Logo height={'22'} width={'187'} />
      </Box>
      <Divider />
      <Box sx={styles.headerNavMobile}>
        <LinkList componentStyles={styles} links={navLinks} />
      </Box>
    </Box>
  );
  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Container maxWidth='xl' sx={styles.container}>
        <Box>
          <Toolbar disableGutters sx={styles.toolbar}>
            <IconButton
              aria-label='open drawer'
              color='primary'
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
              <Logo height={'22'} width={'187'} />
            </Box>
            <Box sx={styles.headerNav}>
              <LinkList componentStyles={styles} links={navLinks} />
              {myProfile()}
            </Box>
          </Toolbar>
          <Box component='nav'>
            <Drawer
              open={mobileOpen}
              sx={{
                display: { sm: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: '80wh',
                },
              }}
              variant='temporary'
              onClose={handlerDrawerToggle}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
