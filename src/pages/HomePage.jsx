import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';

import { HomeTemplate } from '../Templates';
import ConfirmationModal from '../components/AuthModals/ConfirmationModal';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <HomeTemplate>
      <Header />
      <Button onClick={handleOpen}>Push me</Button>
      {open && <ConfirmationModal open={open} setOpen={handleClose} />}

      <HeroSection />
      <AboutSection />
      <Footer />
    </HomeTemplate>
  );
};
export default HomePage;
