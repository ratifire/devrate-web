import { DateTime } from 'luxon';

export const getSortedDatesWithLabel = (respondent) => {
  const filteredAvailableDates = respondent.availableDates.filter((availableDate) => {
    return !respondent.assignedDates.some((assignedDate) => {
      return DateTime.fromISO(availableDate).equals(DateTime.fromISO(assignedDate));
    });
  });

  const availableDatesWithLabel = filteredAvailableDates.map((date) => ({
    date: DateTime.fromISO(date),
    type: 'available',
  }));

  const assignedDatesWithLabel = respondent.assignedDates.map((date) => ({
    date: DateTime.fromISO(date),
    type: 'assigned',
  }));

  const allDates = [...availableDatesWithLabel, ...assignedDatesWithLabel];
  const sortedDates = allDates.sort((a, b) => a.date - b.date);

  return sortedDates.map((item) => ({
    date: item.date.toISO(),
    type: item.type,
  }));
};

export const groupDatesByDay = (dates) => {
  const groupedByDay = {};

  dates.forEach((item) => {
    const date = DateTime.fromISO(item.date);

    const dayKey = date.toFormat('dd.MM.yyyy');

    if (!groupedByDay[dayKey]) {
      groupedByDay[dayKey] = {
        date: dayKey,
        dayOfWeek: date.toFormat('EEEE'),
        items: [],
      };
    }

    groupedByDay[dayKey].items.push(item);
  });

  return Object.values(groupedByDay).sort(
    (a, b) => DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
  );
};
