import PropTypes from 'prop-types';
import React, { lazy, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
const CheckEmail = lazy(() => import('../../components/AuthModals/ResetPasswordModal/CheckEmail'));
const LoginModal = lazy(() => import('../../components/AuthModals/LoginModal'));
const RegistrationModal = lazy(() => import('../../components/AuthModals/RegistrationModal'));
const ResetPassword = lazy(() => import('../../components/AuthModals/ResetPasswordModal/ResetPassword'));
const NotificationModal = lazy(() => import('../../components/AuthModals/ResetPasswordModal/NotificationModal'));


const MemoizedCheckEmail = memo(CheckEmail);
const MemoizedLoginModal = memo(LoginModal);
const MemoizedRegistrationModal = memo(RegistrationModal);
const MemoizedResetPassword = memo(ResetPassword);
const MemoizedNotificationModal = memo(NotificationModal);

const HomeTemplate = ({ children }) => {
  const { openLogin, openRegistration, openCheckEmail, openResetPassword, openNotification } = useSelector((state) => state.modal);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='home'>
        {children}
        {openLogin && <MemoizedLoginModal />}
        {openRegistration && <MemoizedRegistrationModal />}
        {openCheckEmail && <MemoizedCheckEmail />}
        {openNotification && <MemoizedNotificationModal />}
        {openResetPassword && <MemoizedResetPassword />}
      </div>
    </Suspense>
  );
};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeTemplate;
