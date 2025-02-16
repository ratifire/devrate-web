import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TimeSlotGroup from '../TimeSlotGroup/index.js';
import RequestHeader from '../RequsestHeader';
import { getSortedDatesWithLabel, groupDatesByDay } from '../mockData.js';
import { styles } from './Participant.styles.js';

const Participant = ({ data }) => {
  const { t } = useTranslation();

  const { role, desiredInterview, comment, availableDates, assignedDates } = data;
  const sortedDatesWithLabel = getSortedDatesWithLabel(data);
  const sortedDatesByDay = groupDatesByDay(sortedDatesWithLabel);
  // console.log(sortedDatesByDay);
  // console.log(role, 'role');
  const selectedTimeSlots = assignedDates.length + availableDates.length;
  const foundTimeSlots = assignedDates.length;

  // console.log(selectedTimeSlots, 'selectedTimeSlots');
  // console.log(foundTimeSlots, 'foundTimeSlots');

  const handleAddTimeslot = () => {
    // console.log('Додати таймслот');
  };

  return (
    <Box sx={styles.container}>
      <RequestHeader
        description={comment}
        foundInterviews={foundTimeSlots}
        role={t(`interviewRequest.role.${role.toLowerCase()}`)}
        selectedTimeSlots={selectedTimeSlots}
        title='Middle frontend developer interview'
        totalInterviews={desiredInterview}
        onAddTimeslot={handleAddTimeslot}
      />

      {sortedDatesByDay.map((item) => (
        <TimeSlotGroup key={item.date} timeSlots={item} />
      ))}
    </Box>
  );
};

Participant.propTypes = {
  data: PropTypes.object,
};

export default Participant;
