import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';

const Layout = () => {
  return (
    <Container
      maxWidth='xl'
      minWidth='xs'
      sx={{ backgroundColor: 'background.default', height: '100vh', padding: '0 96px' }}
    >
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
    </Container>
  );
};

export default Layout;
