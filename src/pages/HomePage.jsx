import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
// import { ResetPassword } from '../components/AuthModals';
// import CheckEmail from '../components/AuthModals/ResetPasswordModal/CheckEmail';
// import RegistrationModal from '../components/AuthModals/RegistrationModal';
import LoginModal from '../components/AuthModals/LoginModal';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Header />
      <Button onClick={handleOpen}>Push me</Button>
      {open && <LoginModal open={open} setOpen={handleClose} />}
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};
export default HomePage;
