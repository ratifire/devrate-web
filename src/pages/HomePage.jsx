import React, { useState } from 'react';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { Button } from '@mui/material';
// import ModalLayout from '../components/ModalLayout/ModalLayout';
import ResetPasswordModal from '../components/SignupForm/ResetPasswordModal/ResetPasswordModal';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={'home'}>
      <Button onClick={handleOpen}>Push me</Button>
      {open && <ResetPasswordModal open={open} setOpen={handleClose} />}
      <HomeSection />
    </div>
  );
};

export default HomePage;
