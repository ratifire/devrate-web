import PropTypes from 'prop-types';
import React, { lazy, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import './HomeTemplate.css';
const CheckEmail = lazy(() => import('../../components/ModalsComponents/AuthModals/ResetPasswordModal/CheckEmail'));
const LoginModal = lazy(() => import('../../components/ModalsComponents/AuthModals/LoginModal'));
const RegistrationModal = lazy(() => import('../../components/ModalsComponents/AuthModals/RegistrationModal'));
const ResetPassword = lazy(
  () => import('../../components/ModalsComponents/AuthModals/ResetPasswordModal/ResetPassword')
);
const NotificationModal = lazy(
  () => import('../../components/ModalsComponents/AuthModals/ResetPasswordModal/NotificationModal')
);

const MemoizedCheckEmail = memo(CheckEmail);
const MemoizedLoginModal = memo(LoginModal);
const MemoizedRegistrationModal = memo(RegistrationModal);
const MemoizedResetPassword = memo(ResetPassword);
const MemoizedNotificationModal = memo(NotificationModal);

const HomeTemplate = ({ children }) => {
  const { openLogin, openRegistration, openCheckEmail, openResetPassword, openNotification } = useSelector(
    (state) => state.modal
  );

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
