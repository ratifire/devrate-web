import PropTypes from 'prop-types';
import { Box, Checkbox, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import { styles } from './TimeSlot.styles.js';

// const TimeSlot = ({ day, data, currentDate, isSelected, onSelect }) => {
//   const { t } = useTranslation();
//   const dateTime = DateTime.fromISO(data.date);
//   const formattedTime = dateTime.toFormat('HH:mm');
//
//   return (
//     <Box sx={styles.timeSlot}>
//       <Box sx={styles.timeDateContainer}>
//         <Typography sx={styles.date} variant={'subtitle3'}>{`${day} ${currentDate}`}</Typography>
//         <Typography sx={styles.time} variant={'subtitle3'}>
//           {formattedTime}
//         </Typography>
//       </Box>
//
//       <Box sx={styles.statusCheckboxContainer}>
//         <Box sx={data.type === 'assigned' ? { ...styles.status, ...styles.completed } : styles.status}>
//           <Typography sx={styles.statusText} variant={'subtitle3'}>
//             {t('Status: ')}
//           </Typography>
//           {t(`interviewRequest.timeSlot.status.${data.type}`)}
//           <Box sx={styles.statusCircle(data.type)} />
//         </Box>
//         <Checkbox
//           checked={isSelected}
//           disabled={data.type === 'assigned'}
//           sx={styles.checkBox}
//           onChange={() => onSelect(data.date)}
//         />
//       </Box>
//     </Box>
//   );
// };
const TimeSlot = ({ day, data, currentDate, isSelected, onSelect }) => {
  const { t } = useTranslation();
  const dateTime = DateTime.fromISO(data.date, { zone: 'utc' });
  const formattedTime = dateTime.toFormat('HH:mm');

  // Разбиваем диапазон, если он есть
  const [startDay] = day.split(' - ');
  const [startDate] = currentDate.split(' - ');

  return (
    <Box sx={styles.timeSlot}>
      <Box sx={styles.timeDateContainer}>
        <Typography sx={styles.date} variant={'subtitle3'}>{`${startDay} ${startDate}`}</Typography>
        <Typography sx={styles.time} variant={'subtitle3'}>
          {formattedTime}
        </Typography>
      </Box>
      <Box sx={styles.statusCheckboxContainer}>
        <Box sx={data.type === 'assigned' ? { ...styles.status, ...styles.completed } : styles.status}>
          <Typography sx={styles.statusText} variant={'subtitle3'}>
            {t('Status: ')}
          </Typography>
          {t(`interviewRequest.timeSlot.status.${data.type}`)}
          <Box sx={styles.statusCircle(data.type)} />
        </Box>
        <Checkbox
          checked={isSelected}
          disabled={data.type === 'assigned'}
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
  day: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TimeSlot;
