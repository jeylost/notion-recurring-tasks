const RepeatIntervals = {
  "Daily": "Daily",
  "Monthly": "Monthly",
  "Monday": "Monday",
  "Tuesday": "Tuesday",
  "Wednesday": "Wednesday",
  "Thursday": "Thursday",
  "Friday": "Friday",
  "Saturday": "Saturday",
  "Sunday": "Sunday",
  "Yearly": "Yearly",
  "Quarterly": "Quarterly",
};

const days = {
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6,
  "Sunday": 0,
};

/**
 * Calculate Next Due Date for recurring task.
 *
 * @returns {{ isError: boolean, errors: string[], nextDueDate: date }}
 */
module.exports = function calcNextDueDate(repeatIntervals, dueDate) {
  const today = new Date(Date.now());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const intervals = [];
  const errors = [];

  for (const repeatInterval of repeatIntervals) {
      const interval = RepeatIntervals[repeatInterval];
      
      if (!interval) {
        errors.push(`\nInvalid repeat interval "${interval}"`);
      }

      intervals.push(interval);
  }

  if (errors.length > 0) {
    return { isError: true, errors };
  }

  if (intervals.includes(RepeatIntervals["Daily"])) {
    return { isError: false, nextDueDate: tomorrow };
  }

  if (intervals.includes(RepeatIntervals["Monthly"])) {
    const nextDueDate = new Date(dueDate);
    nextDueDate.setMonth(dueDate.getMonth() + 1);

    return { isError: false, nextDueDate };
  }

  if (intervals.includes(RepeatIntervals["Yearly"])) {
    const nextDueDate = new Date(dueDate);
    nextDueDate.setFullYear(dueDate.getFullYear() + 1);

    return { isError: false, nextDueDate };
  }

  if (intervals.includes(RepeatIntervals["Quarterly"])) {
    const nextDueDate = new Date(dueDate);
    nextDueDate.setMonth(dueDate.getMonth() + 3);

    return { isError: false, nextDueDate };
  }

  // Doesn't count current day as atomic quantity is 1 day
  dueDate.setDate(dueDate.getDate() + 1);

  const nearestDay = intervals
    .map(day => days[day])
    .sort((a, b) => {
      const dueDateDay = dueDate.getDay();
      const distanceA = (a - dueDateDay) < 0 ? (7 - dueDateDay) + a : (a - dueDateDay);
      const distanceB = (b - dueDateDay) < 0 ? (7 - dueDateDay) + b : (b - dueDateDay);

      return distanceA - distanceB;
    })[0];
  


  const nearestDateDistance = (nearestDay - dueDate.getDay()) < 0 ? (7 - dueDate.getDay()) + nearestDay : (nearestDay - dueDate.getDay());
  
  const nextDueDate = new Date(dueDate);

  nextDueDate.setDate(nextDueDate.getDate() + nearestDateDistance);

  return { isError: false, nextDueDate };
}
