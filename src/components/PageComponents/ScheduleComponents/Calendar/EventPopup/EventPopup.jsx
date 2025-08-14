import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import cancelEventIcon from '@assets/icons/cancel-event.svg';
import links from '@router/links';
import useDeleteEvent from '@utils/hooks/useDeleteEvent';
import useCheckTimeDifference from '@utils/hooks/schedule/useCheckTimeDifference';
import { useGetEventByIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice';
import { useLazyGetInterviewMeetingUrlQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import { lvlMastery } from '@utils/constants/masteryLvl';
import { PopupPosition } from '@components/PageComponents/ScheduleComponents/constants';
import { enqueueSnackbar } from 'notistack';
import CustomTooltip from '@components/UI/CustomTooltip';
import { getStatusByTime } from '@components/PageComponents/SingleScheduledInterview/helpers/index.js';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { styles } from './EventPopup.styles';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition }) => {
  const { t } = useTranslation();
  const { data, isFetching } = useGetEventByIdQuery({ id: event.id }, { skip: !event.id });
  const [getMeetingUrl, { isLoading: isLoadingMeetingUrl }] = useLazyGetInterviewMeetingUrlQuery();
  const { showCancelButton } = useCheckTimeDifference(event.startTime);
  const status = getStatusByTime(event?.startTime);

  const deleteEvent = useDeleteEvent();

  const joinToInterview = async () => {
    try {
      const meetingUrl = await getMeetingUrl(event.interviewId).unwrap();
      const urlWithParams = new URL(meetingUrl);

      if (event.interviewId && event.role) {
        urlWithParams.searchParams.append('eventId', event.interviewId);
        urlWithParams.searchParams.append('role', event.role);
      }
      window.open(urlWithParams, '_blank');
    } catch (error) {
      if (error.status === 403) {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.403'), { variant: 'error' });
      } else {
        enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), { variant: 'error' });
      }
    }
  };

  const handleCancelInterview = async () => {
    await deleteEvent({
      eventId: event?.id,
      onSuccess: () => {
        handleClosePopup();
      },
    });
  };

  if (isFetching) return null;

  const { counterpartUser, currentUser } = data;
  const currentUserName = `${currentUser.name} ${currentUser.surname}`;
  const counterpartUserName = `${counterpartUser.name} ${counterpartUser.surname}`;

  return (
    <Box
      id='popup'
      sx={(theme) => ({
        ...styles.popup(theme),
        top: popup.y,
        left: popup.x,
      })}
    >
      <Box sx={styles.popupTriangular[PopupPosition[popupPosition]]} />
      {event.type === 'INTERVIEW' && (
        <Box sx={styles.infoContainer}>
          <Box>
            <Typography sx={styles.modalTitle}>{event.title}</Typography>
            <IconButton sx={styles.closeIcon} onClick={handleClosePopup}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={styles.userInfo}>
            <Typography sx={styles.title} variant='caption2'>
              {t('schedule.popupUserInfo')}
            </Typography>
            <Box component={Link} sx={{ textDecoration: 'none' }} to={`${links.profile}/${currentUser.id}`}>
              <CustomTooltip customStyles={styles.name} title={currentUserName} variant='subtitle2'>
                {currentUserName}
              </CustomTooltip>
            </Box>
            <Typography sx={styles.position} variant='caption2'>
              {lvlMastery[currentUser.masteryLevel]} {currentUser.specializationName}
            </Typography>
            <Typography sx={styles.role} variant='caption2'>
              {t('schedule.popupRole')} {t(`schedule.${currentUser.role}`)}
            </Typography>
          </Box>

          <Box sx={styles.interviewerInfo}>
            <Typography sx={styles.title} variant='caption2'>
              {t('schedule.popupInterviewerInfo')}
            </Typography>
            <Box component={Link} sx={{ textDecoration: 'none' }} to={`${links.profile}/${counterpartUser.id}`}>
              <CustomTooltip customStyles={styles.name} title={counterpartUserName} variant='subtitle2'>
                {counterpartUserName}
              </CustomTooltip>
            </Box>
            <Typography sx={styles.position} variant='caption2'>
              {lvlMastery[counterpartUser.masteryLevel]} {counterpartUser.specializationName}
            </Typography>
            <Typography sx={styles.role} variant='caption2'>
              {t('schedule.popupRole')} {t(`schedule.${counterpartUser.role}`)}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={styles.buttonsContainer}>
        <ButtonDef
          component='a'
          disabled={status === 'UPCOMING' || isLoadingMeetingUrl}
          label={t('schedule.link')}
          sx={styles.icon}
          onClick={joinToInterview}
        />
        {showCancelButton && (
          <Box alt='Cancel Event' component='img' src={cancelEventIcon} onClick={handleCancelInterview} />
        )}
      </Box>
    </Box>
  );
};
export default EventPopup;

EventPopup.propTypes = {
  handleClosePopup: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  popup: PropTypes.object.isRequired,
  popupPosition: PropTypes.string,
};
