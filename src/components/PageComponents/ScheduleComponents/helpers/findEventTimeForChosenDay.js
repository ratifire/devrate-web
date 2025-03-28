import { DateTime } from 'luxon';

const findEventTimeForChosenDay = (newDate, resp) => {
  const luxonDate = DateTime.fromISO(newDate);
  if (!luxonDate.isValid) {
    return;
  }

  const targetDay = luxonDate.day;
  const targetMonth = luxonDate.month;
  const targetYear = luxonDate.year;

  const matchingEvents = resp.filter((event) => {
    const eventDate = DateTime.fromISO(event.startTime);
    const eventDay = eventDate.day;
    const eventMonth = eventDate.month;
    const eventYear = eventDate.year;
    return eventDay === targetDay && eventMonth === targetMonth && eventYear === targetYear;
  });

  if (matchingEvents.length === 0) {
    return DateTime.now().toFormat('HH:mm:ss');
  }

  const startTime = DateTime.fromISO(matchingEvents[0].startTime).toLocal();
  const adjustedTime = startTime.minus({ hours: 1 });

  return adjustedTime.toFormat('HH:mm:ss');
};

export default findEventTimeForChosenDay;
