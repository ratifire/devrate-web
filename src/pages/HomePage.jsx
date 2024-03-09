import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';

import { ResetPassword } from '../components/AuthModals';
import { HomeTemplate } from '../Templates';
 
const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <HomeTemplate>
      <Header />
      <Button onClick={handleOpen}>Push me</Button>
      {open && <RegistrationModal open={open} setOpen={handleClose} />}
      <HeroSection />
      <AboutSection />
      <Footer />
    </HomeTemplate>
  );
};
export default HomePage;
