import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import links from '../../../../router/links';
import { useDeleteEvent } from '../../../../utils/hooks/useDeleteEvent';
import useCheckTimeDifference from '../../../../utils/hooks/schedule/useCheckTimeDifference.js';
import { styles } from './EventPopup.styles';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition, setEventUpdated }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const { showCancelButton, disableLink } = useCheckTimeDifference(event.startTime);

  const deleteEvent = useDeleteEvent();

  const handleCancelInterview = async () => {
    await deleteEvent({
      userId,
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
          <IconButton sx={styles.closeIcon} onClick={handleClosePopup}>
            <CloseIcon />
          </IconButton>

          <Box sx={styles.userInfo}>
            <Typography sx={styles.title} variant='caption2'>
              {t('schedule.popupUserInfo')}
            </Typography>
            <Box component={Link} sx={{ textDecoration: 'none' }} to={`${links.profile}/${event.host.id}`}>
              <Typography sx={styles.name} variant='subtitle2'>
                {event.host.name} {event.host.surname}
              </Typography>
            </Box>
            <Typography sx={styles.position} variant='caption2'>
              {event.host.status}
            </Typography>
            <Typography sx={styles.role} variant='caption2'>
              {t('schedule.popupRole')} {event.host.role.toLowerCase()}
            </Typography>
          </Box>

          <Box sx={styles.interviewerInfo}>
            <Typography sx={styles.title} variant='caption2'>
              {t('schedule.popupInterviewerInfo')}
            </Typography>
            <Box
              component={Link}
              sx={{ textDecoration: 'none' }}
              to={`${links.profile}/${event.participantDtos[0].id}`}
            >
              <Typography sx={styles.name} variant='subtitle2'>
                {event.participantDtos[0].name} {event.participantDtos[0].surname}
              </Typography>
            </Box>
            <Typography sx={styles.position} variant='caption2'>
              {event.participantDtos[0].status}
            </Typography>
            <Typography sx={styles.role} variant='caption2'>
              {t('schedule.popupRole')} {event.participantDtos[0].role.toLowerCase()}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={styles.buttonsContainer}>
        <IconButton component='a' disabled={disableLink} href={event.link} sx={styles.icon} target='_blank'>
          <LinkIcon />
        </IconButton>
        {showCancelButton && (
          <ButtonDef
            label={t('schedule.cancelEventBtn')}
            sx={styles.outlined}
            type={'button'}
            variant='outlined'
            onClick={handleCancelInterview}
          />
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
