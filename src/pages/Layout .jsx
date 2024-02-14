import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
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
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
