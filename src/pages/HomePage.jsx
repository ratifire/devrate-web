import React, { useState } from 'react';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { Button } from '@mui/material';
import { createPortal } from 'react-dom';
import ModalLayout from '../components/ModalLayout/ModalLayout';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Button onClick={handleOpen}>Push me</Button>
      {open && createPortal(<ModalLayout open={open} setOpen={handleClose} />, document.getElementById('modal'))}
      <HomeSection />
    </div>
  );
};

export default HomePage;
