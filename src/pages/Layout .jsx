import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '@mui/material/Container';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  return (
    <Container maxWidth='xl' sx={{ '@media (min-width: 600px)': { paddingX: '12px' } }}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Zoom}
      />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
