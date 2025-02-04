import { memo } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import ModalComponent from '../../components/ModalsComponents/ModalComponent.jsx';
import ChatFormTemplate from '../../components/PageComponents/Chat/ChatFormTemplate';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = () => {
  return (
    <>
      <MemoizedProfileHeader />
      <Outlet />
      <ModalComponent />
      <ChatFormTemplate />
    </>
  );
};

export default RootPage;
