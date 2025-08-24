import { memo } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from '@components/PageComponents/ProfileHeader';
import ModalComponent from '@components/ModalsComponents/ModalComponent';
import ChatForm from '@components/PageComponents/Chat/ChatForm';
import { withPushNotifications } from '@utils/hoc';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = withPushNotifications(() => {
  return (
    <>
      <MemoizedProfileHeader />
      <Outlet />
      <ModalComponent />
      <ChatForm />
    </>
  );
});

export default RootPage;
