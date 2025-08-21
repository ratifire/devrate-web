import PropTypes from 'prop-types';
import { Box, Checkbox, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { useTheme } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
import {
  useLazyGetBookedInterviewIdBySlotIdQuery,
  useLazyGetPassedInterviewIdBySlotIdQuery,
} from '@redux/api/slices/interviews/interviewRequestsApiSlice.js';
import { useLazyGetSingleInterviewByIdQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice.js';
import navigationLinks from '@router/links';
import { useNavigate } from 'react-router';
import { enqueueSnackbar } from 'notistack';
import { CustomCheckboxIcon, CustomCheckedIcon } from '../../../UI/CustomCheckbox/CustomCheckbox.js';
import { styles } from './TimeSlot.styles.js';

const TimeSlot = ({ data, isSelected, onSelect, currentLocale, role }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [getBookedInterviewIdBySlotId] = useLazyGetBookedInterviewIdBySlotIdQuery();
  const [getPassedInterviewIdBySlotId] = useLazyGetPassedInterviewIdBySlotIdQuery();
  const [getSingleInterview] = useLazyGetSingleInterviewByIdQuery();
  const dateTime = DateTime.fromISO(data.date);
  const time = dateTime.toFormat('HH:mm');

  const dayKey = dateTime.setLocale('en').toFormat('EEEE').toLowerCase();
  const day = t(`interviewRequest.timeSlot.daysOfWeek.${dayKey}`);
  const date = dateTime.toFormat('dd.MM.yyyy');
  const shiftToSpecificInterview = async () => {
    try {
      let interviewId;

      if (data.type === 'booked') {
        interviewId = await getBookedInterviewIdBySlotId(data.id).unwrap();
        const event = await getSingleInterview({ interviewId }).unwrap();
        navigate(`${navigationLinks.scheduledInterviews}/${interviewId}`, { state: { event } });
      } else if (data.type === 'completed') {
        interviewId = await getPassedInterviewIdBySlotId(data.id).unwrap();
        navigate(`${navigationLinks.passedInterviews}/${interviewId}`);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('notifications.somethingWrong'), {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Box sx={styles.timeSlot(theme, currentLocale)}>
      <Box sx={styles.timeDateContainer}>
        <Typography sx={styles.date} variant={'subtitle3'}>{`${day} ${date}`}</Typography>
        <Typography sx={styles.time} variant={'subtitle3'}>
          {time}
        </Typography>
      </Box>

      <Box sx={styles.statusCheckboxContainer}>
        <Box sx={styles.status(theme, data.type)}>
          <Typography sx={styles.statusText} variant={'subtitle3'}>
            {t('interviewRequest.timeSlot.status.status')}{' '}
          </Typography>
          <Tooltip
            placement='top-start'
            title={data.type === 'pending' ? t(`interviewRequest.pendingTooltip.${role}`) : null}
          >
            <Typography sx={styles.statusState(data.type)} variant={'body1'} onClick={shiftToSpecificInterview}>
              {t(`interviewRequest.timeSlot.status.${data.type}`)}
            </Typography>
          </Tooltip>
        </Box>
        <Checkbox
          checked={isSelected}
          checkedIcon={<CustomCheckedIcon />}
          icon={<CustomCheckboxIcon />}
          sx={styles.checkBox}
          onChange={() => onSelect({ date: data.date, status: data.type })}
        />
      </Box>
    </Box>
  );
};

TimeSlot.propTypes = {
  data: PropTypes.object.isRequired,
  currentDate: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  currentLocale: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TimeSlot;
