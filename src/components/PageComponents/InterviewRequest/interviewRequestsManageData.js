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

// export function mergeTimeSlotsByRows(slotsByDay, maxPerRow = 6) {
//   const days = Object.keys(slotsByDay).sort((a, b) => {
//     const dateA = DateTime.fromFormat(a, 'dd.MM.yyyy', { zone: 'utc' });
//     const dateB = DateTime.fromFormat(b, 'dd.MM.yyyy', { zone: 'utc' });
//     return dateA.toMillis() - dateB.toMillis();
//   });
//
//   const result = [];
//   let currentRow = [];
//   let dayIndex = 0;
//
//   while (dayIndex < days.length) {
//     // Пропускаем пустые дни
//     while (dayIndex < days.length && (!slotsByDay[days[dayIndex]] || slotsByDay[days[dayIndex]].length === 0)) {
//       dayIndex++;
//     }
//
//     if (dayIndex >= days.length) break;
//
//     const currentDay = days[dayIndex];
//     const slots = slotsByDay[currentDay];
//
//     // Добавляем таймслоты в текущую строку
//     for (let i = 0; i < slots.length && currentRow.length < maxPerRow; i++) {
//       currentRow.push(slots[i]);
//     }
//
//     // Если строка заполнена или это последний день, добавляем её в результат
//     if (currentRow.length === maxPerRow || dayIndex === days.length - 1) {
//       const startDate = DateTime.fromISO(currentRow[0].date, { zone: 'utc' }).toFormat('dd.MM.yyyy');
//       const endDate = DateTime.fromISO(currentRow[currentRow.length - 1].date, { zone: 'utc' }).toFormat('dd.MM.yyyy');
//
//       result.push({
//         date: startDate === endDate ? startDate : `${startDate} - ${endDate}`,
//         dayOfWeek:
//           startDate === endDate
//             ? DateTime.fromISO(currentRow[0].date, { zone: 'utc' }).toFormat('EEEE')
//             : `${DateTime.fromISO(currentRow[0].date, { zone: 'utc' }).toFormat('EEEE')} - ${DateTime.fromISO(currentRow[currentRow.length - 1].date, { zone: 'utc' }).toFormat('EEEE')}`,
//         items: [...currentRow],
//       });
//
//       currentRow = [];
//     }
//
//     dayIndex++;
//   }
//
//   return result;
// }

export function mergeTimeSlotsByRows(slotsByDay, maxPerRow = 6) {
  const days = Object.keys(slotsByDay).sort((a, b) => {
    const dateA = DateTime.fromFormat(a, 'dd.MM.yyyy', { zone: 'utc' });
    const dateB = DateTime.fromFormat(b, 'dd.MM.yyyy', { zone: 'utc' });
    return dateA.toMillis() - dateB.toMillis();
  });

  const result = [];
  let currentRow = [];
  let dayIndex = 0;

  while (dayIndex < days.length) {
    // Пропускаем пустые дни
    while (dayIndex < days.length && (!slotsByDay[days[dayIndex]] || slotsByDay[days[dayIndex]].length === 0)) {
      dayIndex++;
    }

    if (dayIndex >= days.length) break;

    const currentDay = days[dayIndex];
    const slots = slotsByDay[currentDay];

    // Проверяем, можно ли добавить таймслоты из текущего дня в текущую строку
    if (currentRow.length > 0) {
      const lastSlotDate = DateTime.fromISO(currentRow[currentRow.length - 1].date, { zone: 'utc' });
      const currentDayDate = DateTime.fromFormat(currentDay, 'dd.MM.yyyy', { zone: 'utc' });

      // Если разница между датами больше 1 дня, завершаем текущую строку
      if (currentDayDate.diff(lastSlotDate, 'days').days > 1) {
        result.push({
          date: getDateRangeForRow(currentRow),
          dayOfWeek: getDayOfWeekRangeForRow(currentRow),
          items: [...currentRow],
        });
        currentRow = [];
      }
    }

    // Добавляем таймслоты в текущую строку
    for (let i = 0; i < slots.length && currentRow.length < maxPerRow; i++) {
      const slot = slots[i];
      slot.dayOfWeek = DateTime.fromISO(slot.date, { zone: 'utc' }).toFormat('EEEE'); // Добавляем день недели
      currentRow.push(slot);
    }

    // Если строка заполнена или это последний день, добавляем её в результат
    if (currentRow.length === maxPerRow || dayIndex === days.length - 1) {
      result.push({
        date: getDateRangeForRow(currentRow),
        dayOfWeek: getDayOfWeekRangeForRow(currentRow),
        items: [...currentRow],
      });
      currentRow = [];
    }

    dayIndex++;
  }

  return result;
}

// Формируем диапазон дат для строки
function getDateRangeForRow(row) {
  if (row.length === 0) return '';

  const startDate = DateTime.fromISO(row[0].date, { zone: 'utc' }).toFormat('dd.MM.yyyy');
  const endDate = DateTime.fromISO(row[row.length - 1].date, { zone: 'utc' }).toFormat('dd.MM.yyyy');

  return startDate === endDate ? startDate : `${startDate} - ${endDate}`;
}

// Формируем диапазон дней недели для строки
function getDayOfWeekRangeForRow(row) {
  if (row.length === 0) return '';

  const startDayOfWeek = DateTime.fromISO(row[0].date, { zone: 'utc' }).toFormat('EEEE');
  const endDayOfWeek = DateTime.fromISO(row[row.length - 1].date, { zone: 'utc' }).toFormat('EEEE');

  return startDayOfWeek === endDayOfWeek ? startDayOfWeek : `${startDayOfWeek} - ${endDayOfWeek}`;
}
