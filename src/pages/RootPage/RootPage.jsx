import { memo } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from '@components/PageComponents/ProfileHeader';
import ModalComponent from '@components/ModalsComponents/ModalComponent.jsx';
import ChatForm from '@components/PageComponents/Chat/ChatForm/index.js';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = () => {
  return (
    <>
      <MemoizedProfileHeader />
      <Outlet />
      <ModalComponent />
      <ChatForm />
    </>
  );
};

export default RootPage;
