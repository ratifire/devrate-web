import PropTypes from 'prop-types';
import { Box, Checkbox, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { CustomCheckboxIcon, CustomCheckedIcon } from '../../../UI/CustomCheckbox/CustomCheckbox.js';
import { styles } from './TimeSlot.styles.js';

const TimeSlot = ({ data, isSelected, onSelect }) => {
  const { t } = useTranslation();
  const dateTime = DateTime.fromISO(data.date);

  const time = dateTime.toFormat('HH:mm');

  const dayKey = dateTime.setLocale('en').toFormat('EEEE').toLowerCase();
  const day = t(`interviewRequest.timeSlot.daysOfWeek.${dayKey}`);
  const date = dateTime.toFormat('dd.MM.yyyy');

  return (
    <Box sx={styles.timeSlot}>
      <Box sx={styles.timeDateContainer}>
        <Typography sx={styles.date} variant={'subtitle3'}>{`${day} ${date}`}</Typography>
        <Typography sx={styles.time} variant={'subtitle3'}>
          {time}
        </Typography>
      </Box>

      <Box sx={styles.statusCheckboxContainer}>
        <Box sx={data.type === 'assigned' ? styles.assigned : styles.panding}>
          <Typography sx={styles.statusText} variant={'subtitle3'}>
            {t('interviewRequest.timeSlot.status.status')}{' '}
          </Typography>
          {t(`interviewRequest.timeSlot.status.${data.type}`)}
        </Box>
        <Checkbox
          checked={isSelected}
          checkedIcon={<CustomCheckedIcon />}
          icon={<CustomCheckboxIcon />}
          sx={styles.checkBox}
          onChange={() => onSelect(data.date)}
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
};

export default TimeSlot;
