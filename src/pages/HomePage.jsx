import React, { useState } from 'react';
import { Button } from '@mui/material';

import { CheckEmailResetPasswordModal } from '../components/AuthModals';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Header />
      <Button onClick={handleOpen}>Push me</Button>
      {open && <CheckEmailResetPasswordModal open={open} setOpen={handleClose} />}
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};
export default HomePage;
