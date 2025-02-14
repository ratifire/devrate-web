import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { UserCard } from '../../../UI/Interview';
import { lvlMastery } from '../../../../utils/constants/masteryLvl';
import formatDateAndTime from '../../../../utils/helpers/formatDateAndTime';
import { useGetAvatarUserQuery } from '../../../../redux/user/avatar/avatarApiSlice';
import { ErrorComponent } from '../../../UI/Exceptions';
import { UserCardScheduledInterviewSkeleton } from '../../../UI/Skeleton';

const UserCardScheduledInterview = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { hostFirstName, hostLastName, masteryLevel, startTime, title, hostId } = location.state.event;
  const {
    data: avatar,
    isLoading: isLoadingAvatar,
    isError: isErrorAvatar,
  } = useGetAvatarUserQuery(hostId, { skip: !hostId });

  const date = formatDateAndTime(startTime);

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
      date={date}
      firstName={hostFirstName}
      label={t('singleScheduledInterview.userCardScheduledInterview.btn')}
      lastName={hostLastName}
      lvl={lvlMastery[masteryLevel]}
      role={title}
      src={avatar}
    />
  );
};

export default UserCardScheduledInterview;
