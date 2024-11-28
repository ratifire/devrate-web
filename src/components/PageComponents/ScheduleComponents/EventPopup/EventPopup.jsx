import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './EventPopup.styles';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useDeleteEventByIdMutation } from '../../../../redux/schedule/scheduleApiSlice';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import links from '../../../../router/links';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition, setEventUpdated }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const [deleteEventById] = useDeleteEventByIdMutation();

  const [showCancelButton, setShowCancelButton] = useState(true);
  const [disableLink, setDisableLink] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const eventStartTime = new Date(event.startTime);

    const checkTimeDifference = () => {
      const currentTime = new Date();
      const timeDifferenceInMinutes = (currentTime - eventStartTime) / (1000 * 60);

      if (timeDifferenceInMinutes >= 1) {
        setShowCancelButton(false);
      }

      if (timeDifferenceInMinutes >= 60) {
        setDisableLink(true);
      }
    };

    checkTimeDifference();

    const timer = setInterval(checkTimeDifference, 60000);

    return () => clearInterval(timer);
  }, [event.startTime]);
  const handleCancelInterview = async function () {
    if (!event || !event.eventTypeId) {
      console.error('Event object or event ID is missing');
    }

    if (!userId) {
      console.error('User ID is missing');
    }

    try {
      await deleteEventById({ userId, id: event.eventTypeId }).unwrap();
      handleClosePopup();
      setEventUpdated((prev) => !prev);
      enqueueSnackbar(t('schedule.deleteEventSuccessMessage'), { variant: 'success' });
    } catch (error) {
      console.error('Failed to add skill:', error);

      if (error.status === 400) {
        console.error('Bad Request: Likely an issue with the request data or format');
      }
      enqueueSnackbar(t('schedule.deleteEventErrorMessage'), { variant: 'error' });
    }
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
      {popupPosition === 'TOPLEFT' && <Box sx={styles.popupTriangularTopLeft}></Box>}
      {popupPosition === 'BOTTOMLEFT' && <Box sx={styles.popupTriangularBottomLeft}></Box>}
      {popupPosition === 'TOPRIGHT' && <Box sx={styles.popupTriangularTopRight}></Box>}
      {popupPosition === 'BOTTOMRIGHT' && <Box sx={styles.popupTriangularBottomRight}></Box>}

      {event.type === 'INTERVIEW' && (
        <Box sx={styles.infoContainer}>
          <IconButton onClick={handleClosePopup} sx={styles.closeIcon}>
            <CloseIcon />
          </IconButton>

          <Box sx={styles.userInfo}>
            <Typography variant='caption2' sx={styles.title}>
              {t('schedule.popupUserInfo')}
            </Typography>
            <Box component={Link} to={`${links.profile}/${event.host.id}`} sx={{ textDecoration: 'none' }}>
              <Typography variant='subtitle2' sx={styles.name}>
                {event.host.name} {event.host.surname}
              </Typography>
            </Box>
            <Typography variant='caption2' sx={styles.position}>
              {event.host.status}
            </Typography>
            <Typography variant='caption2' sx={styles.role}>
              {t('schedule.popupRole')} {event.host.role.toLowerCase()}
            </Typography>
          </Box>

          <Box sx={styles.interviewerInfo}>
            <Typography variant='caption2' sx={styles.title}>
              {t('schedule.popupInterviewerInfo')}
            </Typography>
            <Box
              component={Link}
              to={`${links.profile}/${event.participantDtos[0].id}`}
              sx={{ textDecoration: 'none' }}
            >
              <Typography variant='subtitle2' sx={styles.name}>
                {event.participantDtos[0].name} {event.participantDtos[0].surname}
              </Typography>
            </Box>
            <Typography variant='caption2' sx={styles.position}>
              {event.participantDtos[0].status}
            </Typography>
            <Typography variant='caption2' sx={styles.role}>
              {t('schedule.popupRole')} {event.participantDtos[0].role.toLowerCase()}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={styles.buttonsContainer}>
        <IconButton component='a' href={event.link} target='_blank' sx={styles.icon} disabled={disableLink}>
          <LinkIcon />
        </IconButton>
        {showCancelButton && (
          <ButtonDef
            correctStyle={styles.outlined}
            type={'button'}
            variant='outlined'
            handlerClick={handleCancelInterview}
            label={t('schedule.cancelEventBtn')}
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
