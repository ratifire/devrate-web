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
import { lvlMastery } from '@utils/constants/masteryLvl';
import { PopupPosition } from '@components/PageComponents/ScheduleComponents/constants';
import CustomTooltip from '@components/UI/CustomTooltip';
import { getStatusByTime } from '@components/PageComponents/SingleScheduledInterview/helpers';
import useJoinInterview from '@utils/hooks/useJoinInterview';

import { ButtonDef } from '../../../../FormsComponents/Buttons';
import { styles } from './EventPopup.styles';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition }) => {
  const { t } = useTranslation();
  const { data, isFetching } = useGetEventByIdQuery({ id: event.id }, { skip: !event.id });
  const { joinInterview, isLoadingMeetingUrl } = useJoinInterview();
  const { showCancelButton } = useCheckTimeDifference(event.startTime);
  const status = getStatusByTime(event?.startTime);

  const deleteEvent = useDeleteEvent();

  const handleJoinClick = async () => {
    await joinInterview(event.interviewId, event.role);
  };

  const handleCancelInterview = async () => {
    await deleteEvent({
      eventId: event?.interviewId,
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
          onClick={handleJoinClick}
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
