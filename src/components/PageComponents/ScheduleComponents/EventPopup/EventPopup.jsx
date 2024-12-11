import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { useDeleteEventByIdMutation } from '../../../../redux/schedule/scheduleApiSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import links from '../../../../router/links';
import useCheckTimeDifference from '../../../../utils/hooks/schedule/useCheckTimeDifference';
import { styles } from './EventPopup.styles';

const EventPopup = ({ handleClosePopup, event, popup, popupPosition, setEventUpdated }) => {
  const { eventTypeId, type, link, host, startTime, participantDtos } = event;
  const { t } = useTranslation();
  const theme = useTheme();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const [deleteEventById] = useDeleteEventByIdMutation();

  const [showCancelButton, setShowCancelButton] = useState(true);
  const [disableLink, setDisableLink] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  useCheckTimeDifference(startTime, setShowCancelButton, setDisableLink);

  const handleCancelInterview = async function () {
    if (!event || !eventTypeId) {
      // eslint-disable-next-line no-console
      console.error('Event object or event ID is missing');
    }

    if (!userId) {
      // eslint-disable-next-line no-console
      console.error('User ID is missing');
    }

    try {
      await deleteEventById({ userId, id: eventTypeId }).unwrap();
      handleClosePopup();
      setEventUpdated((prev) => !prev);
      enqueueSnackbar(t('schedule.deleteEventSuccessMessage'), { variant: 'success' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to add skill:', error);

      if (error.status === 400) {
        // eslint-disable-next-line no-console
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
      {popupPosition === 'TOPLEFT' && <Box sx={styles.popupTriangularTopLeft} />}
      {popupPosition === 'BOTTOMLEFT' && <Box sx={styles.popupTriangularBottomLeft} />}
      {popupPosition === 'TOPRIGHT' && <Box sx={styles.popupTriangularTopRight} />}
      {popupPosition === 'BOTTOMRIGHT' && <Box sx={styles.popupTriangularBottomRight} />}

      {type === 'INTERVIEW' && (
        <Box sx={styles.infoContainer}>
          <IconButton sx={styles.closeIcon} onClick={handleClosePopup}>
            <CloseIcon />
          </IconButton>

          <Box sx={styles.userInfo}>
            <Typography sx={styles.title} variant='caption2'>
              {t('schedule.popupUserInfo')}
            </Typography>
            <Box component={Link} sx={{ textDecoration: 'none' }} to={`${links.profile}/${host.id}`}>
              <Typography sx={styles.name} variant='subtitle2'>
                {host.name} {host.surname}
              </Typography>
            </Box>
            <Typography sx={styles.position} variant='caption2'>
              {host.status}
            </Typography>
            <Typography sx={styles.role} variant='caption2'>
              {t('schedule.popupRole')} {host.role.toLowerCase()}
            </Typography>
          </Box>

          <Box sx={styles.interviewerInfo}>
            <Typography sx={styles.title} variant='caption2'>
              {t('schedule.popupInterviewerInfo')}
            </Typography>
            <Box component={Link} sx={{ textDecoration: 'none' }} to={`${links.profile}/${participantDtos[0].id}`}>
              <Typography sx={styles.name} variant='subtitle2'>
                {participantDtos[0].name} {participantDtos[0].surname}
              </Typography>
            </Box>
            <Typography sx={styles.position} variant='caption2'>
              {participantDtos[0].status}
            </Typography>
            <Typography sx={styles.role} variant='caption2'>
              {t('schedule.popupRole')} {participantDtos[0].role.toLowerCase()}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={styles.buttonsContainer}>
        <IconButton component='a' disabled={disableLink} href={link} sx={styles.icon} target='_blank'>
          <LinkIcon />
        </IconButton>
        {showCancelButton && (
          <ButtonDef
            correctStyle={styles.outlined}
            handlerClick={handleCancelInterview}
            label={t('schedule.cancelEventBtn')}
            type={'button'}
            variant='outlined'
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
