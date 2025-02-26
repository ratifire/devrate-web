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

export function mergeTimeSlotsByRows(slotsByDay, maxPerRow = 6) {
  const days = Object.keys(slotsByDay).sort((a, b) => {
    const dateA = DateTime.fromFormat(a, 'dd.MM.yyyy', { zone: 'utc' });
    const dateB = DateTime.fromFormat(b, 'dd.MM.yyyy', { zone: 'utc' });
    return dateA.toMillis() - dateB.toMillis();
  });

  const result = [];
  let currentRow = { dates: [], slots: [] };

  days.forEach((day) => {
    const daySlots = slotsByDay[day] || [];

    // Если текущий день не помещается в текущую строку, начинаем новую строку
    if (currentRow.slots.length + daySlots.length > maxPerRow && currentRow.slots.length > 0) {
      result.push({
        dateRange:
          currentRow.dates.length > 1
            ? `${currentRow.dates[0]} - ${currentRow.dates[currentRow.dates.length - 1]}`
            : currentRow.dates[0],
        dates: currentRow.dates,
        slots: currentRow.slots,
      });
      currentRow = { dates: [], slots: [] };
    }

    // Добавляем слоты текущего дня в текущую строку
    currentRow.dates.push(day);
    currentRow.slots = [...currentRow.slots, ...daySlots];
  });

  // Добавляем последнюю строку, если она не пустая
  if (currentRow.slots.length > 0) {
    result.push({
      dateRange:
        currentRow.dates.length > 1
          ? `${currentRow.dates[0]} - ${currentRow.dates[currentRow.dates.length - 1]}`
          : currentRow.dates[0],
      dates: currentRow.dates,
      slots: currentRow.slots,
    });
  }

  return result;
}
