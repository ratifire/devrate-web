import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useGetHeightElement from '@utils/hooks/useGetHeightElement';
import { useScrollPadding } from '@utils/helpers/useScrollPadding';
import SideBarEvent from '../InterviewSideBarEvent';
import { styles } from './SideBar.styles';

const SideBar = ({ interviews, refHandler, passedInterview }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const height = useGetHeightElement('.InterviewsPage');
  useScrollPadding(refHandler, '16px');

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.interviewTitle} variant='h4'>
        {t('interviews.sideBar.title')}
      </Typography>
      <Box sx={styles.scrollContainer(theme, height)}>
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
