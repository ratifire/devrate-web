import { DateTime } from 'luxon';

export const getSortedDatesWithLabel = (respondent) => {
  const timeSlots = respondent.timeSlots || [];

  // Доступные слоты (PENDING)
  const availableDatesWithLabel = timeSlots
    .filter((slot) => slot.status === 'PENDING')
    .map((slot) => ({
      date: DateTime.fromISO(slot.dateTime),
      type: 'pending',
      id: slot.id,
    }));

  // Назначенные слоты (BOOKED)
  const assignedDatesWithLabel = timeSlots
    .filter((slot) => slot.status === 'BOOKED')
    .map((slot) => ({
      date: DateTime.fromISO(slot.dateTime),
      type: 'booked',
      id: slot.id,
    }));

  // Просроченные слоты (EXPIRED)
  const expiredDatesWithLabel = timeSlots
    .filter((slot) => slot.status === 'EXPIRED')
    .map((slot) => ({
      date: DateTime.fromISO(slot.dateTime),
      type: 'expired',
      id: slot.id,
    }));

  const allDates = [...availableDatesWithLabel, ...assignedDatesWithLabel, ...expiredDatesWithLabel];
  const sortedDates = allDates.sort((a, b) => a.date - b.date);

  return sortedDates.map((item) => ({
    date: item.date.toISO(),
    type: item.type,
    id: item.id,
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

function mergeDaysRecursive(days, slotsByDay, maxPerRow, i = 0, result = []) {
  if (i >= days.length) {
    return result;
  }

  const { mergedDays, mergedSlots, nextIndex } = gatherSlots(days, slotsByDay, maxPerRow, i);

  if (mergedDays.length === 0) {
    return result;
  }

  const dateRange = mergedDays.length > 1 ? `${mergedDays[0]} - ${mergedDays[mergedDays.length - 1]}` : mergedDays[0];
  result.push({
    dateRange,
    dates: mergedDays,
    slots: mergedSlots,
  });

  return mergeDaysRecursive(days, slotsByDay, maxPerRow, nextIndex, result);
}

function gatherSlots(days, slotsByDay, maxPerRow, startIndex) {
  let mergedDays = [];
  let mergedSlots = [];
  let currentIndex = startIndex;

  while (currentIndex < days.length) {
    const day = days[currentIndex];
    const daySlots = slotsByDay[day] || [];

    mergedDays.push(day);
    mergedSlots = [...mergedSlots, ...daySlots];
    currentIndex++;

    if (mergedSlots.length >= maxPerRow) {
      break;
    }
  }

  return {
    mergedDays,
    mergedSlots,
    nextIndex: currentIndex,
  };
}

export function mergeTimeSlotsByRows(slotsByDay, maxPerRow = 6) {
  const days = Object.keys(slotsByDay).sort((a, b) => {
    const dateA = DateTime.fromFormat(a, 'dd.MM.yyyy', { zone: 'utc' });
    const dateB = DateTime.fromFormat(b, 'dd.MM.yyyy', { zone: 'utc' });
    return dateA.toMillis() - dateB.toMillis();
  });

  return mergeDaysRecursive(days, slotsByDay, maxPerRow);
}
