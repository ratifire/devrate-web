import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import cancelEventIcon from '@assets/icons/cancel-event.svg';
import links from '@router/links';
import useDeleteEvent from '@utils/hooks/useDeleteEvent';
import useCheckTimeDifference from '@utils/hooks/schedule/useCheckTimeDifference';
import { useGetEventByIdQuery, useLazyGetMeetingUrlByEventIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice';
import { lvlMastery } from '@utils/constants/masteryLvl';
import { PopupPosition } from '@components/PageComponents/ScheduleComponents/constants';
import { enqueueSnackbar } from 'notistack';
import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { styles } from './EventPopup.styles';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition }) => {
  const { t } = useTranslation();
  const { data, isFetching } = useGetEventByIdQuery({ id: event.id }, { skip: !event.id });
  const [getMeetingUrl, { isLoading: isLoadingMeetingUrl }] = useLazyGetMeetingUrlByEventIdQuery();
  const { showCancelButton } = useCheckTimeDifference(event.startTime);

  const deleteEvent = useDeleteEvent();

  const joinToInterview = async () => {
    try {
      const meetingUrl = await getMeetingUrl({ eventId: event.id }).unwrap();
      window.open(meetingUrl, '_blank');
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('singleScheduledInterview.scheduledMeeting.canceled.error'), { variant: 'error' });
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
              <Typography sx={styles.name} variant='subtitle2'>
                {currentUser.name} {currentUser.surname}
              </Typography>
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
              <Typography sx={styles.name} variant='subtitle2'>
                {counterpartUser.name} {counterpartUser.surname}
              </Typography>
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
          disabled={isLoadingMeetingUrl}
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
