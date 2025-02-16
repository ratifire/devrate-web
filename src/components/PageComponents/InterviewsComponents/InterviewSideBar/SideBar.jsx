import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import SideBarEvent from '../InterviewSideBarEvent';
import { useScrollPadding } from '../../../../utils/helpers/useScrollPadding';
import { styles } from './SideBar.styles';

const SideBar = ({ interviews, refHandler, passedInterview }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const containerRef = useRef(null);
  const heightRef = useRef(null);

  useScrollPadding(containerRef, '9px');

  useLayoutEffect(() => {
    if (!heightRef.current) {
      const parentNode = document.querySelector('.ScheduledInterviewsPage');
      heightRef.current = parentNode?.clientHeight || 1068;
    }
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.interviewTitle} variant='h4'>
        {t('interviews.sideBar.title')}
      </Typography>
      <Box ref={containerRef} sx={styles.scrollContainer(theme, heightRef.current)}>
        {interviews?.map((event, index) => (
          <SideBarEvent
            key={event.id}
            event={event}
            passedInterview={passedInterview}
            refHandler={index === interviews.length - 1 ? refHandler : null}
          />
        ))}
      </Box>
    </Box>
  );
};

SideBar.propTypes = {
  interviews: PropTypes.array,
  refHandler: PropTypes.func,
  passedInterview: PropTypes.bool,
  handlePaperClick: PropTypes.func,
  selectedPaperId: PropTypes.number,
};

export default SideBar;
