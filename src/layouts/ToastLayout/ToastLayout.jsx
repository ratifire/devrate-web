import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Zoom } from 'react-toastify';
import { Outlet } from 'react-router-dom';

const ToastLayout = () => {
  return (
    <>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        limit={3}
        newestOnTop={false}
        position='top-right'
        rtl={false}
        theme='colored'
        transition={Zoom}
      />
      <Outlet />
    </>
  );
};

ToastLayout.propTypes = {
  children: PropTypes.node,
};

export default ToastLayout;
