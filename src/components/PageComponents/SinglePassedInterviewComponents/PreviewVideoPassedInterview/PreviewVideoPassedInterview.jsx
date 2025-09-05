import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { feedbackInterviewRole } from '@utils/constants/feedbackInterviewRole';
import { useGetPersonalUserQuery } from '@redux/api/slices/user/personal/personalApiSlice';
import { useParams } from 'react-router';
import { useGetPassedInterviewByIdQuery } from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import InterviewPreviewVideo from '@components/PageComponents/InterviewsComponents/InterviewPreviewVideo';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { lvlMastery } from '@utils/constants/masteryLvl';
import { ErrorComponent } from '@components/UI/Exceptions';
import { useTranslation } from 'react-i18next';
import { PreviewVideoPassedInterviewSkeleton } from '@components/UI/Skeleton';
import { styles } from './PreviewVideoPassedInterview.styles';

const PreviewVideoPassedInterview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { interviewId } = useParams();
  const { t } = useTranslation();
  const {
    data: interviewData,
    isFetching: isFetchingPassedInterview,
    isError: isErrorPassedInterview,
  } = useGetPassedInterviewByIdQuery({ interviewId }, { skip: !interviewId });
  const attendeeId = interviewData?.attendeeId;
  const {
    data: avatar,
    isFetching: isFetchingAvatar,
    isError: isErrorAvatar,
  } = useGetAvatarUserQuery(attendeeId, { skip: !attendeeId });
  const interviewerId = interviewData?.userId;
  const {
    data: candidateContacts,
    isFetching: isFetchingCandidateContacts,
    isError: isErrorCandidateContacts,
  } = useGetPersonalUserQuery(interviewerId, {
    skip: !interviewerId,
  });
  const {
    data: userContacts,
    isFetching: isFetchingUserContacts,
    isError: isErrorUserContacts,
  } = useGetPersonalUserQuery(attendeeId, {
    skip: !attendeeId,
  });
  const {
    data: interviewerAvatar,
    isFetching: isFetchingInterviewerAvatar,
    isError: isErrorInterviewerAvatar,
  } = useGetAvatarUserQuery(interviewerId, {
    skip: !interviewerId,
  });

  const isError =
    isErrorPassedInterview ||
    isErrorUserContacts ||
    isErrorCandidateContacts ||
    isErrorAvatar ||
    isErrorInterviewerAvatar;
  const isFetching =
    isFetchingPassedInterview ||
    isFetchingUserContacts ||
    isFetchingCandidateContacts ||
    isFetchingInterviewerAvatar ||
    isFetchingAvatar;

  if (isFetching) {
    return <PreviewVideoPassedInterviewSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const { attendeeMasteryLevel, attendeeSpecialization, videoUrl = interviewData?.videoUrl, role } = interviewData;
  const level = lvlMastery[attendeeMasteryLevel];
  const { firstName, lastName } = userContacts;
  const { firstName: candidateFirstName, lastName: candidateLastName } = candidateContacts;

  const isCandidateRole = role === feedbackInterviewRole.CANDIDATE;

  const previewData = {
    candidate: {
      firstName: isCandidateRole ? candidateFirstName : firstName,
      lastName: isCandidateRole ? candidateLastName : lastName,
      avatar: isCandidateRole ? avatar?.userPicture : interviewerAvatar?.userPicture,
    },
    interviewer: {
      firstName: isCandidateRole ? firstName : candidateFirstName,
      lastName: isCandidateRole ? lastName : candidateLastName,
      avatar: isCandidateRole ? interviewerAvatar?.userPicture : avatar?.userPicture,
    },
    level: level || '',
    specialization: attendeeSpecialization || '',
    role: role || '',
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handlePlayPressed = () => {
    setIsPlaying(true);
  };

  const showPreview = !isPlaying || !videoUrl;

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>{t('interviews.passedInterviews.interviewPreviewVideo.headerTitle')}</Typography>
      </Box>
      {showPreview ? (
        <InterviewPreviewVideo
          shouldShowVisibilityControl
          candidateFirstName={previewData?.candidate?.firstName}
          candidateLastName={previewData?.candidate?.lastName}
          candidateSrc={previewData?.interviewer?.avatar}
          interviewLevel={previewData?.level}
          interviewerFirstName={previewData?.interviewer?.firstName}
          interviewerLastName={previewData?.interviewer?.lastName}
          interviewerSrc={previewData?.candidate?.avatar}
          specialization={previewData?.specialization}
          onPlayPressed={handlePlayPressed}
        />
      ) : (
        <Box sx={styles.playerWrapper}>
          <ReactPlayer
            controls
            height='100%'
            playing={isPlaying}
            src={videoUrl}
            style={styles.interviewVideo}
            width='100%'
            onEnded={handleVideoEnded}
          />
        </Box>
      )}
    </Box>
  );
};

export default PreviewVideoPassedInterview;
