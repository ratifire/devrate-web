import { useState } from 'react';
import { Box, Typography } from '@mui/material';
// import { useTranslation } from 'react-i18next';
import TimeSlotGroup from '../TimeSlotGroup/index.js';
import RequestHeader from '../RequsestHeader';
import { styles } from './Respondent.styles.js';

const slotsByDay = [
  {
    date: 'Понеділок, 26.11.2024',
    slots: [
      { time: '13:00', status: 'Pending' },
      { time: '14:00', status: 'Pending' },
      { time: '15:00', status: 'Scheduled' },
    ],
  },
  {
    date: 'Вівторок, 27.11.2024',
    slots: [
      { time: '10:00', status: 'Pending' },
      { time: '11:00', status: 'Scheduled' },
    ],
  },
];

const Respondent = () => {
  // const { t } = useTranslation();

  const [stats] = useState({
    foundInterviews: 2,
    totalInterviews: 5,
    selectedTimeslots: 11,
  });

  const handleAddTimeslot = () => {
    // console.log('Додати таймслот');
  };

  return (
    <Box sx={styles.container}>
      <RequestHeader
        description='Хочу отримати реалістичний досвід співбесіди, включно з технічними запитаннями, кодингом та фідбеком для покращення своїх навичок. Ціль — підготуватися до реальних співбесід.'
        role='Respondent'
        stats={stats}
        title='Middle frontend developer interview'
        onAddTimeslot={handleAddTimeslot}
      />

      {slotsByDay.map((day, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box key={index} sx={styles.dayGroup}>
          <Typography sx={styles.dayTitle}>{day.date}</Typography>
          <TimeSlotGroup timeSlots={day.slots} />
        </Box>
      ))}
    </Box>
  );
};

export default Respondent;
