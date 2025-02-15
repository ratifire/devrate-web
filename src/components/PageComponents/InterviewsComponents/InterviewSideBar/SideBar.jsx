import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import SideBarEvent from '../InterviewSideBarEvent';
import { useScrollPadding } from '../../../../utils/helpers/useScrollPadding';
import { styles } from './SideBar.styles';

const SideBar = ({ interviews, refHandler, passedInterview }) => {
  const { t } = useTranslation();
  const [selectedPaperId, setSelectedPaperId] = useState(null);
  const containerRef = useRef(null);

  const handlePaperClick = (paperId) => {
    setSelectedPaperId(paperId);
  };

  useScrollPadding(containerRef, '9px');

  const renderEventList = () => {
    return (
      interviews?.length > 0 &&
      interviews.map((event, index) => (
        <SideBarEvent
          key={`${event.id}-${event.roomUrl}`}
          event={event}
          handlePaperClick={handlePaperClick}
          passedInterview={passedInterview}
          refHandler={index === interviews.length - 1 ? refHandler : null}
          selectedPaperId={selectedPaperId}
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
  handlePaperClick: PropTypes.func,
  selectedPaperId: PropTypes.number,
};

export default SideBar;
