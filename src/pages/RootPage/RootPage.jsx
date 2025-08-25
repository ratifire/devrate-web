import { memo } from 'react';
import { Outlet } from 'react-router';
import ModalComponent from '@components/ModalsComponents/ModalComponent.jsx';
import ChatForm from '@components/PageComponents/Chat/ChatForm/index.js';
import LayoutWithSidebar from '@layouts/LayoutWithSidebar/LayoutWithSidebar.jsx';

const MemoizedLayout = memo(LayoutWithSidebar);

const RootPage = () => {
  return (
    <>
      <MemoizedLayout>
        <Outlet />
      </MemoizedLayout>
      <ModalComponent />
      <ChatForm />
    </>
  );
};

export default RootPage;
