// import { DateTime } from 'luxon';
//
// export const getSortedDatesWithLabel = (respondent) => {
//   const filteredAvailableDates = respondent.availableDates.filter((availableDate) => {
//     return !respondent.assignedDates.some((assignedDate) => {
//       return DateTime.fromISO(availableDate).equals(DateTime.fromISO(assignedDate));
//     });
//   });
//
//   const availableDatesWithLabel = filteredAvailableDates.map((date) => ({
//     date: DateTime.fromISO(date),
//     type: 'available',
//   }));
//
//   const assignedDatesWithLabel = respondent.assignedDates.map((date) => ({
//     date: DateTime.fromISO(date),
//     type: 'assigned',
//   }));
//
//   const allDates = [...availableDatesWithLabel, ...assignedDatesWithLabel];
//   const sortedDates = allDates.sort((a, b) => a.date - b.date);
//
//   return sortedDates.map((item) => ({
//     date: item.date.toISO(),
//     type: item.type,
//   }));
// };
//
// export const groupDatesByDay = (dates) => {
//   const groupedByDay = {};
//
//   dates.forEach((item) => {
//     const date = DateTime.fromISO(item.date);
//
//     const dayKey = date.toFormat('dd.MM.yyyy');
//
//     if (!groupedByDay[dayKey]) {
//       groupedByDay[dayKey] = {
//         date: dayKey,
//         dayOfWeek: date.toFormat('EEEE'),
//         items: [],
//       };
//     }
//
//     groupedByDay[dayKey].items.push(item);
//   });
//
//   return Object.values(groupedByDay).sort(
//     (a, b) => DateTime.fromISO(a.date).toMillis() - DateTime.fromISO(b.date).toMillis()
//   );
// };
//
// function mergeDaysRecursive(days, slotsByDay, maxPerRow, i = 0, result = []) {
//   if (i >= days.length) {
//     return result;
//   }
//
//   const { mergedDays, mergedSlots, nextIndex } = gatherSlots(days, slotsByDay, maxPerRow, i);
//
//   if (mergedDays.length === 0) {
//     return result;
//   }
//
//   const dateRange = mergedDays.length > 1 ? `${mergedDays[0]} - ${mergedDays[mergedDays.length - 1]}` : mergedDays[0];
//   result.push({
//     dateRange,
//     dates: mergedDays,
//     slots: mergedSlots,
//   });
//
//   return mergeDaysRecursive(days, slotsByDay, maxPerRow, nextIndex, result);
// }
//
// function gatherSlots(days, slotsByDay, maxPerRow, startIndex) {
//   let mergedDays = [];
//   let mergedSlots = [];
//   let currentIndex = startIndex;
//
//   while (currentIndex < days.length) {
//     const day = days[currentIndex];
//     const daySlots = slotsByDay[day] || [];
//
//     mergedDays.push(day);
//     mergedSlots = [...mergedSlots, ...daySlots];
//     currentIndex++;
//
//     if (mergedSlots.length >= maxPerRow) {
//       break;
//     }
//   }
//
//   return {
//     mergedDays,
//     mergedSlots,
//     nextIndex: currentIndex,
//   };
// }
//
// export function mergeTimeSlotsByRows(slotsByDay, maxPerRow = 6) {
//   const days = Object.keys(slotsByDay).sort((a, b) => {
//     const dateA = DateTime.fromFormat(a, 'dd.MM.yyyy', { zone: 'utc' });
//     const dateB = DateTime.fromFormat(b, 'dd.MM.yyyy', { zone: 'utc' });
//     return dateA.toMillis() - dateB.toMillis();
//   });
//
//   return mergeDaysRecursive(days, slotsByDay, maxPerRow);
// }
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

// Todo refactor
function mergeDaysRecursive(days, slotsByDay, maxPerRow, i = 0, result = []) {
  // Якщо індекс вийшов за межі довжини масиву днів — повертаємо результат
  if (i >= days.length) {
    return result;
  }

  const mergedInfo = gatherSlots(days, slotsByDay, maxPerRow, i);

  const { mergedDays, mergedSlots, nextIndex } = mergedInfo;

  // Формуємо "зліплений" рядок з дат (наприклад, "day1_day2_day3")

  const dateRange = mergedDays.length > 1 ? mergedDays[0] + ' - ' + mergedDays.at(-1) : mergedDays[0];

  // Кладемо в результат новий об'єкт
  result.push({
    dateRange,
    dates: mergedDays,
    slots: mergedSlots,
  });

  // Рекурсивно викликаємо функцію від наступного індексу
  const index = nextIndex === i ? nextIndex + 1 : nextIndex;
  return mergeDaysRecursive(days, slotsByDay, maxPerRow, index, result);
}

/**
 * Допоміжна функція, яка збирає слоти, починаючи з індексу `startIndex`,
 * доки сума слотів не досягне maxPerRow або не закінчаться дні.
 */
function gatherSlots(days, slotsByDay, maxPerRow, startIndex) {
  let mergedDays = [];
  let mergedSlots = [];
  let totalSlots = 0;

  let currentIndex = startIndex;

  while (currentIndex < days.length) {
    const day = days[currentIndex];
    const daySlots = slotsByDay[day] || [];
    // console.log(daySlots, 'daySlots', totalSlots, 'totalSlots');

    // if (maxPerRow < daySlots.length && !isEmpty(mergedSlots)) {
    //   // mergedDays.push(day);
    //   // mergedSlots = [...daySlots];
    //   // console.log(mergedSlots, 'maxPerRow < daySlots.length', daySlots, maxPerRow);
    //   console.log(mergedSlots, 'mergedSlots');
    //   break;
    // }

    // Якщо додавання слотів наступного дня не перевищує maxPerRow, додаємо
    if (totalSlots + daySlots.length <= maxPerRow) {
      mergedDays.push(day);
      mergedSlots = [...mergedSlots, ...daySlots];
      totalSlots += daySlots.length;
      currentIndex++;
    } else {
      // Якщо перевищує, припиняємо мерджити
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
  // console.log({ days, maxPerRow, slotsByDay });

  return mergeDaysRecursive(days, slotsByDay, maxPerRow);
  // return [];
}
