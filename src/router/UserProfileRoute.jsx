import { useParams, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import UserProfilePage from '../pages/ProfilePages/UserProfilePage';

const UserProfileRoute = () => {
  const { userId } = useParams();
  const { id: authorizedUserId } = useSelector((state) => state.auth.user.data);

  if (+userId === authorizedUserId) {
    return <Navigate replace to='/profile' />;
  }

  return <UserProfilePage />;
};

export default UserProfileRoute;
