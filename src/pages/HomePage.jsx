import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { ResetPassword } from '../components/AuthModals';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Header />
      <Button onClick={handleOpen}>Push me</Button>
      {open && <ResetPassword open={open} setOpen={handleClose} />}
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};
export default HomePage;
