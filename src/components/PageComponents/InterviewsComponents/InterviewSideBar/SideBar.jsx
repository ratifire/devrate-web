import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SideBarEvent from '../InterviewSideBarEvent';
import { styles } from './SideBar.styles.js';

const SideBar = ({ interviews, lastEventRef }) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.interviewTitle} variant='h4'>
        {t('interviews.sideBar.title')}
      </Typography>
      <Box sx={styles.scrollContainer}>
        {interviews?.length > 0 &&
          interviews.map((event, index) => (
            <SideBarEvent key={event.id} ref={index === interviews.length - 1 ? lastEventRef : null} event={event} />
          ))}
      </Box>
    </Box>
  );
};

SideBar.propTypes = {
  interviews: PropTypes.array,
  lastEventRef: PropTypes.object,
};

export default SideBar;
