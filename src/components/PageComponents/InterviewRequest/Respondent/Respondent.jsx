import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import TimeSlotGroup from '../TimeSlotGroup/index.js';
import { ButtonDef } from '../../../FormsComponents/Buttons/index.js';
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
  const { t } = useTranslation();

  const [stats] = useState({
    foundInterviews: 2,
    totalInterviews: 5,
    selectedTimeslots: 11,
  });

  const handleAddTimeslot = () => {};

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>Middle frontend developer interview as a Respondent</Typography>
        <Box sx={styles.buttons}>
          <IconButton aria-label='delete' sx={styles.iconDelete}>
            <DeleteIcon />
          </IconButton>
          <ButtonDef
            label={t('Add time slots')}
            startIcon={<AddIcon />}
            sx={styles.outlined}
            type={'button'}
            variant='outlined'
            onClick={handleAddTimeslot}
          />
        </Box>
      </Box>

      <Box sx={styles.statsContainer}>
        <Typography sx={styles.statItem}>
          <strong>Знайдено інтерв’ю:</strong> {stats.foundInterviews}
        </Typography>
        <Typography sx={styles.statItem}>
          <strong>Кількість інтерв’ю:</strong> {stats.totalInterviews}
        </Typography>
        <Typography sx={styles.statItem}>
          <strong>Обрано таймслотів:</strong> {stats.selectedTimeslots}
        </Typography>
      </Box>

      <Box>
        <Typography>
          Хочу отримати реалістичний досвід співбесіди, включно з технічними запитаннями, кодингом та фідбеком для
          покращення своїх навичок. Ціль — підготуватися до реальних співбесід.
        </Typography>
      </Box>

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
