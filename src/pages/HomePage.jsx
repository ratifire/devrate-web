import React, { useState } from 'react';
import { Button } from '@mui/material';

import { LoginModal } from '../components/AuthModals';
import { AboutSection, Footer, Header, HeroSection } from '../components/Home';

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
