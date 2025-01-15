import { memo } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import ModalComponent from '../../components/ModalsComponents/ModalComponent.jsx';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = () => {
  return (
    <>
      <MemoizedProfileHeader />
      <Outlet />
      <ModalComponent />
    </>
  );
};

export default RootPage;
