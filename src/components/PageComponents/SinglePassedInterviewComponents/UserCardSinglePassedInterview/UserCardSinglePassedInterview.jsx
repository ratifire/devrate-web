import { formatToLocalDateInterview } from '@utils/helpers/formatToLocalDateInterview';
import { UserCard } from '@components/UI/Interview';
import { UserCardSkeleton } from '@components/UI/Skeleton';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { useLocation } from 'react-router';
import { lvlMastery } from '@utils/constants/masteryLvl';
import { ErrorComponent } from '@components/UI/Exceptions';

const UserCardSinglePassedInterview = () => {
  const location = useLocation();

  const interviewData = location.state.event;
  const attendeeId = interviewData?.attendeeId;

  const {
    data: userContacts,
    isFetching: isFetchingContacts,
    isError: isErrorPersonalUser,
  } = useGetPersonalUserQuery(attendeeId, {
    skip: !attendeeId,
  });
  const {
    data: avatar,
    isFetching: isFetchingAvatar,
    isError: isErrorAvatar,
  } = useGetAvatarUserQuery(attendeeId, { skip: !attendeeId });

  const isFetchingUserCard = isFetchingContacts || isFetchingAvatar;
  const isError = isErrorPersonalUser || isErrorAvatar;

  if (isFetchingUserCard) {
    return <UserCardSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const { dateTime, attendeeMasteryLevel, attendeeSpecialization } = interviewData;

  const { firstName, lastName } = userContacts;
  const userRole = `${lvlMastery[attendeeMasteryLevel]} ${attendeeSpecialization}`;
  const level = lvlMastery[attendeeMasteryLevel];

  return (
    <UserCard
      date={formatToLocalDateInterview(dateTime)}
      firstName={firstName}
      id={attendeeId}
      isViewBtn={false}
      label='label'
      lastName={lastName}
      lvl={level}
      role={userRole}
      src={avatar?.userPicture}
    />
  );
};

export default UserCardSinglePassedInterview;
