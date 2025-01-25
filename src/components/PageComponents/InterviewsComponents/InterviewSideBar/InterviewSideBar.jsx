import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InterviewSideBarEvent from '../InterviewSideBarEvent/';
import { styles } from './InterviewSideBar.styles';

const InterviewSideBar = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.interviewTitle} variant='h4'>
        {t('interviews.sideBar.title')}
      </Typography>
      <Box sx={styles.scrollContainer}>
        {data.length > 0 && data.map((event) => <InterviewSideBarEvent key={event.id} event={event} />)}
      </Box>
    </Box>
  );
};

InterviewSideBar.propTypes = {
  data: PropTypes.array,
};

export default InterviewSideBar;
