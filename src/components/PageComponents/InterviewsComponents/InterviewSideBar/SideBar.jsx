import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import SideBarEvent from '../InterviewSideBarEvent';
import { useScrollPadding } from '../../../../utils/helpers/useScrollPadding.js';
import { styles } from './SideBar.styles.js';

const SideBar = ({ interviews, refHandler, passedInterview }) => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useScrollPadding(containerRef, '9px');

  const renderEventList = () => {
    return (
      interviews?.length > 0 &&
      interviews.map((event, index) => (
        <SideBarEvent
          key={event.id}
          event={event}
          passedInterview={passedInterview}
          refHandler={index === interviews.length - 1 ? refHandler : null}
        />
      ))
    );
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.interviewTitle} variant='h4'>
        {t('interviews.sideBar.title')}
      </Typography>
      <Box ref={containerRef} sx={styles.scrollContainer}>
        {renderEventList()}
      </Box>
    </Box>
  );
};

SideBar.propTypes = {
  interviews: PropTypes.array,
  refHandler: PropTypes.func,
  passedInterview: PropTypes.bool,
};

export default SideBar;
