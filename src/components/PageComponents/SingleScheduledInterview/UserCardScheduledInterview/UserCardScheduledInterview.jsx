import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { UserCard } from '@components/UI/Interview';
import { lvlMastery } from '@utils/constants/masteryLvl';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { ErrorComponent } from '@components/UI/Exceptions';
import { UserCardScheduledInterviewSkeleton } from '@components/UI/Skeleton';
import { openChat } from '@redux/slices/chat/chatSlice';

const UserCardScheduledInterview = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();
  const { hostFirstName, hostLastName, title, hostId, masteryLevel } = location.state.event;

  const {
    data: avatar,
    isLoading: isLoadingAvatar,
    isError: isErrorAvatar,
  } = useGetAvatarUserQuery(hostId, { skip: !hostId });

  const handleMessage = () => {
    dispatch(
      openChat({ id: hostId, firstName: hostFirstName, lastName: hostLastName, userPicture: avatar?.userPicture })
    );
  };

  if (isErrorAvatar) {
    return <ErrorComponent />;
  }

  if (isLoadingAvatar) {
    return <UserCardScheduledInterviewSkeleton />;
  }

  return (
    <UserCard
      isViewBtn
      data='03/06/2023'
      date={t('singleScheduledInterview.userCardScheduledInterview.interviewLvl')}
      firstName={hostFirstName}
      id={hostId}
      label={t('singleScheduledInterview.userCardScheduledInterview.btn')}
      lastName={hostLastName}
      lvl={lvlMastery[masteryLevel]}
      role={title}
      src={avatar?.userPicture}
      onClick={handleMessage}
    />
  );
};

export default UserCardScheduledInterview;
