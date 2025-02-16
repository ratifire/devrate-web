export const respondent = [
  {
    id: 0,
    role: 'CANDIDATE',
    desiredInterview: 5,
    comment:
      'Хочу отримати реалістичний досвід співбесіди,' +
      ' включно з технічними запитаннями,' +
      ' кодингом та фідбеком для покращення своїх навичок.' +
      ' Ціль — підготуватися до реальних співбесід.',
    availableDates: [
      '2025-02-15T11:45:23.913Z',
      '2025-02-15T12:45:23.913Z',
      '2025-02-15T14:45:23.913Z',
      '2025-02-16T16:45:23.913Z',
      '2025-02-16T17:45:23.913Z',
      '2025-02-17T18:45:23.913Z',
      '2025-02-17T19:45:23.913Z',
      '2025-02-17T20:45:23.913Z',
      '2025-02-17T21:45:23.913Z',
    ],
    assignedDates: ['2025-02-15T13:45:23.913Z', '2025-02-16T15:45:23.913Z'],
  },

  {
    id: 1,
    role: 'INTERVIEWER',
    desiredInterview: 6,
    comment:
      'Прагну створити реалістичний досвід співбесіди з технічними запитаннями,' +
      " кодингом та наданням фідбеку.Ціль — вдосконалити свої навички інтерв'ювання та оцінювання кандидатів.",
    availableDates: [
      '2025-02-15T11:45:23.913Z',
      '2025-02-15T12:45:23.913Z',
      '2025-02-15T14:45:23.913Z',
      '2025-02-16T16:45:23.913Z',
      '2025-02-16T17:45:23.913Z',
      '2025-02-17T18:45:23.913Z',
      '2025-02-17T19:45:23.913Z',
      '2025-02-17T20:45:23.913Z',
      '2025-02-17T21:45:23.913Z',
      '2025-02-17T09:45:23.913Z',
    ],
    assignedDates: ['2025-02-15T13:45:23.913Z', '2025-02-16T15:45:23.913Z', '2025-02-16T10:45:23.913Z'],
  },
];

import { DateTime } from 'luxon';

export const getSortedDatesWithLabel = (respondent) => {
  const availableDatesWithLabel = respondent.availableDates.map((date) => ({
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
