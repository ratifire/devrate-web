import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router';
import cancelEventIcon from '../../../../assets/icons/cancel-event.svg';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import links from '../../../../router/links';
import { useDeleteEvent } from '../../../../utils/hooks/useDeleteEvent';
import useCheckTimeDifference from '../../../../utils/hooks/schedule/useCheckTimeDifference';
import { useGetEventByIdQuery } from '../../../../redux/schedule/scheduleApiSlice';
import { lvlMastery } from '../../../../utils/constants/masteryLvl';
import { styles } from './EventPopup.styles';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition, setEventUpdated }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { data, isFetching } = useGetEventByIdQuery({ id: event.id }, { skip: !event.id });

  const { showCancelButton, disableLink } = useCheckTimeDifference(event.startTime);

  const deleteEvent = useDeleteEvent();

  const handleCancelInterview = async () => {
    await deleteEvent({
      eventId: event?.eventTypeId,
      onSuccess: () => {
        handleClosePopup();
        setEventUpdated((prev) => !prev);
      },
      // eslint-disable-next-line no-console
      onError: (error) => console.error('EventPopup: Error deleting event', error),
      // eslint-disable-next-line no-console
      onFinally: () => console.log('EventPopup: Deletion process complete'),
    });
  };

  if (isFetching) return null;

  const { counterpartUser, currentUser } = data;

  return (
    <Box
      id='popup'
      sx={{
        ...styles.popup,
        top: popup.y,
        left: popup.x,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[50],
        boxShadow:
          theme.palette.mode === 'dark' ? 'box-shadow: 2px 4px 6px 0px #00000000' : '2px 4px 6px 0px #00000040',
      }}
    >
      {popupPosition === 'TOPLEFT' && <Box sx={styles.popupTriangularTopLeft} />}
      {popupPosition === 'BOTTOMLEFT' && <Box sx={styles.popupTriangularBottomLeft} />}
      {popupPosition === 'TOPRIGHT' && <Box sx={styles.popupTriangularTopRight} />}
      {popupPosition === 'BOTTOMRIGHT' && <Box sx={styles.popupTriangularBottomRight} />}

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
          disabled={disableLink}
          href={event.roomLink}
          label={t('schedule.link')}
          sx={styles.icon}
          target='_blank'
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
  setEventUpdated: PropTypes.func.isRequired,
};
EventPopup.defaultProps = {
  handleClosePopup: () => {},
  event: {},
  popup: {},
  popupPosition: 'TOPRIGHT',
  setEventUpdated: () => {},
};
