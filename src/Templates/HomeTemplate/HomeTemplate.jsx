// В HomeTemplate.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CheckEmail, LoginModal, RegistrationModal, ResetPassword } from '../../components/AuthModals';
 
const HomeTemplate = ({ children }) => {
  const openLogin = useSelector((state) => state.modal.openLogin);
  const openRegistration = useSelector((state) => state.modal.openRegistration);
  const openCheckEmail = useSelector((state) => state.modal.openCheckEmail);
  const openResetPassword = useSelector((state) => state.modal.openResetPassword);
  return (
    <div className='home'>
         {children}        {openLogin && <LoginModal />}
        {openRegistration && <RegistrationModal />}
        {openCheckEmail && <CheckEmail />}
        {openResetPassword && <ResetPassword />}
     </div>  );
};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
