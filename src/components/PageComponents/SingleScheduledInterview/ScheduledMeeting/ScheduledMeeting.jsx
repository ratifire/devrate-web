import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { selectCurrentUser } from '@redux/slices/auth/authSlice';
import { useGetAvatarUserQuery } from '@redux/api/slices/user/avatar/avatarApiSlice';
import { formatTimeToUtc, formatTimeWithOffset } from '@utils/helpers';
import { useDeleteInterviewMutation } from '@redux/api/slices/interviews/singleScheduledInterviewApiSlice';
import navigationLinks from '@router/links.js';
import { modalNames } from '@utils/constants/modalNames';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { useModalController } from '@utils/hooks/useModalController.js';
import UserAvatar from '../../../UI/UserAvatar';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { ErrorComponent } from '../../../UI/Exceptions';
import { ScheduledMeetingSkeleton } from '../../../UI/Skeleton';
import { getStatusByTime } from '../helpers';
import { styles } from './ScheduledMeeting.styles';
import { btnStatus, leftBtnStatus, rightBtnStatus } from './constants';

const ScheduledMeeting = () => {
  const { t } = useTranslation();
  const {
    data: { firstName, lastName, id },
  } = useSelector(selectCurrentUser);
  const { enqueueSnackbar } = useSnackbar();
  const { openModal } = useModalController();
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
      cancelMeeting({ eventId })
        .then(() => {
          enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.success'), {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
          });
          navigate(navigationLinks.interviews);
        })
        .catch(() => {
          enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), { variant: 'success' });
        });
    }
  };

  const handleClickRightBtn = () => {
    if (status === btnStatus['UPCOMING'] || status === btnStatus['IN PROCESS']) {
      // Create URL with query params to use in mirotalk in a survey later
      const url = new URL(roomUrl);
      if (eventId && role) {
        url.searchParams.append('eventId', eventId);
        url.searchParams.append('role', role);
      }
      window.open(url, '_blank');
    }

    if (status === btnStatus['AWAITING FEEDBACK']) {
      openModal(modalNames.feedbackInterviewModal, { feedbackId: eventId, role });
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
          {t('singleScheduledInterview.scheduledMeeting.title')}
        </Typography>
        <Typography component='p' sx={styles[status]} variant='subtitle2'>
          {t(`singleScheduledInterview.scheduledMeeting.${status}`).toUpperCase()}
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
          {t('singleScheduledInterview.scheduledMeeting.participants')}:
          <Typography component='span' variant='body'>
            {hostFullName}; {userFullName}
          </Typography>
        </Typography>
      </Box>
      <Box sx={styles.boxParameters}>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('singleScheduledInterview.scheduledMeeting.language')}
          </Typography>
          <Typography component='p' variant='body'>
            {t(`specialization.language.name.${languageCode}`)}
          </Typography>
        </Box>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('singleScheduledInterview.scheduledMeeting.duration')}
          </Typography>
          <Typography component='p' variant='body'>
            60 {t('singleScheduledInterview.scheduledMeeting.durationType')}
          </Typography>
        </Box>
        <Box sx={styles.boxParametersInfo}>
          <Typography component='p' variant='subtitle2'>
            {t('singleScheduledInterview.scheduledMeeting.platform')}
          </Typography>
          <Typography component='p' sx={styles.platformIcon} variant='body'>
            <VideoCameraFrontIcon sx={styles.icon} /> Meeting Service
          </Typography>
        </Box>
      </Box>
      <Typography component='p' variant='body2'>
        <Trans
          components={{
            a: <Link component={RouterLink} sx={styles.link} to='/' />,
          }}
          i18nKey='singleScheduledInterview.scheduledMeeting.link'
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
