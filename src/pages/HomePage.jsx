import React, { useState } from 'react';
import { HomeSection } from '../components/HomeSection/HomeSection';
import AboutSection from '../components/HomeSection/AboutSection/AboutSection';
import { Button } from '@mui/material';
// import ModalLayout from '../components/ModalLayout/ModalLayout';
// import ResetPasswordModal from '../components/SignupForm/ResetPasswordModal/ResetPasswordModal';
// import RegistrationModal from '../components/SignupForm/RegistrationModal';
import CheckEmailResetPasswordModal from '../components/SignupForm/CheckEmailResetPasswordModal/CheckEmailResetPasswordModal';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Button onClick={handleOpen}>Push me</Button>
      {open && <CheckEmailResetPasswordModal open={open} setOpen={handleClose} />}
      <HomeSection />
      <AboutSection />
    </div>
  );
};
export default HomePage;
