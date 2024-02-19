import React, { useState } from 'react';
import { HeroSection } from '../components/Home/HeroSection/HeroSection';
import AboutSection from '../components/Home/AboutSection/AboutSection';
import { Button } from '@mui/material';
// import ModalLayout from '../components/ModalLayout/ModalLayout';
// import ResetPasswordModal from '../components/Modals/ResetPasswordModal/ResetPasswordModal';
// import RegistrationModal from '../components/Modals/RegistrationModal/RegistrationModal';
// import LoginModal from '../components/Modals/LoginModal/LoginModal';
   import CheckEmailResetPasswordModal from '../components/SignupForm/CheckEmailResetPasswordModal/CheckEmailResetPasswordModal';
 
const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Button onClick={handleOpen}>Push me</Button>
       {open && <CheckEmailResetPasswordModal open={open} setOpen={handleClose} />}
      <HeroSection />
       <AboutSection />
    </div>
  );
};
export default HomePage;
