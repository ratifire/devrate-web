import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import UserAvatar from '@components/UI/UserAvatar';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { ErrorComponent } from '@components/UI/Exceptions';
import { ScheduledMeetingSkeleton } from '@components/UI/Skeleton';
import { formatTimeToUtc, formatTimeWithOffset } from '@utils/helpers';
import { useDeleteInterviewMutation } from '@redux/api/slices/interviews/singleScheduledInterviewApiSlice.js';
import navigationLinks from '@router/links.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { openModal } from '@redux/slices/modal/modalSlice.js';
import zoom from '@assets/icons/InterviewPageIcons/zoom.png';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { getStatusByTime } from '../helpers';
import { styles } from './ScheduledMeeting.styles';
import { btnStatus, leftBtnStatus } from './constants';
import rightBtnStatus from './constants/rigthBtnStatus';

const ScheduledMeeting = () => {
  const { t } = useTranslation();
  const {
    data: { firstName, lastName, id },
  } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    hostFirstName,
    hostLastName,
    hostId,
    startTime,
    languageCode,
    id: eventId,
    roomUrl,
    role,
  } = location.state.event;

  const {
    data: hostAvatar,
    isLoading: isLoadingHostAvatar,
    isError: isErrorHostAvatar,
  } = useGetAvatarUserQuery(hostId, { skip: !hostId });

  const {
    data: userAvatar,
    isLoading: isLoadingUserAvatar,
    isError: isErrorUserAvatar,
  } = useGetAvatarUserQuery(id, { skip: !id });
  const [cancelMeeting, { isError: isErrorCancelMeeting, isLoading: isLoadingCancelMeeting }] =
    useDeleteInterviewMutation();

  const handleClickLeftBtn = () => {
    if (status === btnStatus['UPCOMING']) {
      cancelMeeting({ eventId }).then(() => navigate(navigationLinks.interviews));
    }
  };

  const handleClickRightBtn = () => {
    if (status === btnStatus['UPCOMING'] || status === btnStatus['IN PROCESS']) {
      window.open(roomUrl, '_blank');
    }

    if (status === btnStatus['AWAITING FEEDBACK']) {
      dispatch(openModal({ modalType: modalNames.feedbackInterviewModal, data: { feedbackId: eventId, role } }));
    }
  };

  if (isErrorHostAvatar || isErrorUserAvatar || isErrorCancelMeeting) {
    return <ErrorComponent />;
  }

  if (isLoadingHostAvatar || isLoadingUserAvatar) {
    return <ScheduledMeetingSkeleton />;
  }

  const hostFullName = `${hostFirstName} ${hostLastName}`;
  const userFullName = `${firstName} ${lastName}`;
  const time = formatTimeToUtc(startTime);
  const startAndTime = formatTimeWithOffset(startTime);
  const status = getStatusByTime(startTime);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.boxTitle}>
        <Typography component='h6' variant='h6'>
          {t('singleScheduledInterview.interviewsSummary.scheduledMeeting.title')}
        </Typography>
        <Typography component='p' sx={styles[status]} variant='subtitle2'>
          {status}
        </Typography>
      </Box>
      <Box sx={styles.boxDataTime}>
        <Typography component='p' variant='subtitle3'>
          {time}
        </Typography>
        <Typography component='h4' variant='h4'>
          {startAndTime}
        </Typography>
      </Box>
      <Box sx={styles.boxInfo}>
        <Box sx={styles.boxImg}>
          <UserAvatar
            radius='circle'
            size='xs'
            src={userAvatar?.userPicture}
            userFirstName={firstName}
            userLastName={lastName}
            userName={firstName}
          />
          <UserAvatar
            correctStyle={styles.activeImg}
            radius='circle'
            size='xs'
            src={hostAvatar?.userPicture}
            userFirstName={hostFirstName}
            userLastName={hostLastName}
            userName={hostFirstName}
          />
        </Box>
        <Typography component='p' sx={styles.boxInfoText} variant='subtitle2'>
          {t('singleScheduledInterview.interviewsSummary.scheduledMeeting.participants')}:
          <Typography component='span' variant='body'>
            {hostFullName}; {userFullName}
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.boxParameters}>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('singleScheduledInterview.interviewsSummary.scheduledMeeting.language')}
          </Typography>
          <Typography component='p' variant='body'>
            {t(`specialization.language.name.${languageCode}`)}
          </Typography>
        </Box>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('singleScheduledInterview.interviewsSummary.scheduledMeeting.duration')}
          </Typography>
          <Typography component='p' variant='body'>
            60 {t('singleScheduledInterview.interviewsSummary.scheduledMeeting.durationType')}
          </Typography>
        </Box>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('singleScheduledInterview.interviewsSummary.scheduledMeeting.platform')}
          </Typography>
          <Typography component='p' sx={styles.platformIcon} variant='body'>
            <Box component='img' src={zoom} sx={styles.icon} /> Zoom
          </Typography>
        </Box>
      </Box>
      <Typography component='p' variant='body2'>
        <Trans
          components={{
            a: <Link component={RouterLink} sx={styles.link} to='/' />,
          }}
          i18nKey='singleScheduledInterview.interviewsSummary.scheduledMeeting.link'
        />
      </Typography>
      <Box sx={styles.boxBtn}>
        <ButtonDef
          disabled={status === btnStatus['IN PROCESS'] || isLoadingCancelMeeting}
          label={t(leftBtnStatus[status])}
          sx={styles.btn}
          variant='outlined'
          onClick={handleClickLeftBtn}
        />
        <ButtonDef
          label={t(rightBtnStatus[status])}
          sx={styles.btn}
          variant='contained'
          onClick={handleClickRightBtn}
        />
      </Box>
    </Box>
  );
};

export default ScheduledMeeting;
