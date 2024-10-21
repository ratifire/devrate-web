import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './EventPopup.styles';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDeleteEventByIdMutation } from '../../../../redux/schedule/scheduleApiSlice';
import {useTheme} from "@mui/material/styles";
import { Link } from 'react-router-dom';


const EventPopup = ({ handleClosePopup, event, popup, popupPosition }) => {
  console.log(event)
  const { t } = useTranslation();
  const [deleteEventById] = useDeleteEventByIdMutation();
  const theme = useTheme()
  const handleCancelInterview = async function (event) {
    try {
      await deleteEventById(event).unwrap();
      toast.success(t('schedule.deleteEventSuccessMessage'), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.error('Failed to add skill:', error);
      toast.error(t('schedule.deleteEventErrorMessage'), {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };
  return (
    <Box
        id="popup"
        sx={{
          ... styles.popup,
          top: popup.y,
          left: popup.x,
          backgroundColor: theme.palette.mode === "dark" ? theme.palette.neutral[800] : theme.palette.neutral[50] ,
          boxShadow:theme.palette.mode === "dark" ? "box-shadow: 2px 4px 6px 0px #00000000":
          "2px 4px 6px 0px #00000040"
        }}    >
      {popupPosition === 'TOPLEFT' && <Box sx={styles.popupTriangularTopLeft}></Box>}
      {popupPosition === 'BOTTOMLEFT' && <Box sx={styles.popupTriangularBottomLeft}></Box>}
      {popupPosition === 'TOPRIGHT' && <Box sx={styles.popupTriangularTopRight}></Box>}
      {popupPosition === 'BOTTOMRIGHT' && <Box sx={styles.popupTriangularBottomRight}></Box>}
      
      {event.type==="INTERVIEW" && <Box sx={styles.infoContainer}>
        <IconButton onClick={handleClosePopup} sx={styles.closeIcon}>
          <CloseIcon/>
        </IconButton>
        <Box sx={styles.userInfo}>
          <Typography variant='caption2' sx={styles.title}>
            {t('schedule.popupUserInfo')}
          </Typography>
          <Typography variant='subtitle2' sx={styles.name}>
            <Link
              to={`/profile/${event.host.id}`}
              style={{
                textDecoration: 'none',
                color: theme.palette.mode === 'dark' ?
                  theme.palette.schedule.sideBarEvent.titleColor :
                  theme.palette.schedule.sideBarEvent.titleColor,
              }}>
              {event.host.name} {event.host.surname}
            </Link>
          </Typography>
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
          <Typography variant='subtitle2' sx={styles.name}>
            <Link to={`/profile/${event.participantDtos[0].id}`}
                  style={{
                    textDecoration: 'none',
                    color: theme.palette.mode === 'dark' ?
                      theme.palette.schedule.sideBarEvent.titleColor :
                      theme.palette.schedule.sideBarEvent.titleColor,
                  }}>
              {event.participantDtos[0].name} {event.participantDtos[0].surname}
            </Link>
          </Typography>
          <Typography variant='caption2' sx={styles.position}>
            {event.participantDtos[0].status}
          </Typography>
          <Typography variant='caption2' sx={styles.role}>
            {t('schedule.popupRole')} {event.participantDtos[0].role.toLowerCase()}
          </Typography>
        </Box>
      </Box>}
      <Box sx={styles.buttonsContainer}>
        <IconButton component='a' href={event.link} target='_blank' sx={styles.icon}>
          <LinkIcon />
        </IconButton>
        <ButtonDef
          correctStyle={styles.outlined}
          type={'button'}
          variant='outlined'
          handlerClick={handleCancelInterview}
          label={t('schedule.cancelEventBtn')}
        />
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
EventPopup.defaultProps = {
  handleClosePopup: () => {},
  event: {},
  popup: {},
  popupPosition: 'TOPRIGHT',
};
