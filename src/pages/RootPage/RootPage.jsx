import { memo } from 'react';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import ProfileHeader from '../../components/PageComponents/ProfileHeader';
import ModalComponent from '../../components/ModalsComponents/ModalComponent.jsx';
import ChatForm from '../../components/PageComponents/Chat/ChatForm/index.js';
import { connectToChat } from '../../redux/chat/chatSlice.js';
import { selectCurrentUser } from '../../redux/auth/authSlice.js';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = () => {
  const { data: info } = useSelector(selectCurrentUser);
  const { id: currentUserId } = info;
  const dispatch = useDispatch();
  dispatch(connectToChat({ userId: currentUserId }));
  return (
    <>
      <MemoizedProfileHeader />
      <Outlet />
      <ModalComponent />
      {/*<ChatFormTemplate />*/}
      <ChatForm />
    </>
  );
};

export default RootPage;
