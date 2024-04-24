import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Zoom } from 'react-toastify';

const ToastLayout = ({ children }) => {
  return (
    <>
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
      {children}
    </>
  );
};

ToastLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastLayout;
