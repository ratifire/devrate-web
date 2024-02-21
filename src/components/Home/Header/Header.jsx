import React, { useState } from 'react';
import { AppBar, Box, Container, Divider, Drawer, IconButton, Link, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/icons/logo.svg';
import styles from './Header.styles';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const handlerDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navLinks = [t('header.about_platform'), t('header.community'), t('header.contacts'), t('header.log_in')];

  const drawer = (
    <Box onClick={handlerDrawerToggle} sx={styles.drawer}>
      <Box sx={styles.logoMobileBox}>
        <img src={logo} alt='logo' width={'187'} height={'22.7'} />
      </Box>
      <Divider />
      <Box sx={styles.headerNavMobile}>
        {navLinks.map((link) => (
          <Link key={link} to={`/`} component={RouterLink} sx={styles.link}>
            {link}
          </Link>
        ))}
      </Box>
    </Box>
  );
  return (
    <AppBar component='header' position={'static'} sx={styles.header}>
      <Container maxWidth='xl' sx={{ '@media (min-width: 600px)': { paddingX: '12px' } }}>
        <Box sx={styles.wrapper}>
          <Toolbar disableGutters sx={styles.toolbar}>
            <IconButton
              color='primary'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr: 15,
                display: { md: 'none' },
              }}
              onClick={handlerDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={styles.logoBox}>
              <img src={logo} alt='logo' width={'187'} height={'22.7'} />
            </Box>
            <Box sx={styles.headerNav}>
              {navLinks.map((link) => (
                <Link key={link} to={`/`} component={RouterLink} sx={styles.link}>
                  {link}
                </Link>
              ))}
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
