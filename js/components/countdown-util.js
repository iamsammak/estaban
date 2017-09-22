const MonthInDays = {
  1: 31,
  2: 59,
  3: 90,
  4: 120,
  5: 151,
  6: 181,
  7: 212,
  8: 243,
  9: 273,
  10: 304,
  11: 334,
  12: 365
};

const MonthInDaysLeap = {
  1: 31,
  2: 60,
  3: 91,
  4: 121,
  5: 152,
  6: 182,
  7: 213,
  8: 244,
  9: 274,
  10: 305,
  11: 335,
  12: 366
};

const LeapYears = [
  2004, 2008, 2012,
  2016, 2020, 2024
];

export const calcDaysBetween = function(targetDate, currentDate) {
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1; //get month(0-11)
  let currentDay = currentDate.getDate();

  let targetYear = targetDate[0];
  let targetMonth = targetDate[1];
  let targetDay = targetDate[2];

  let yearInDays = 365;

  let retYear = (targetYear - currentYear) * yearInDays;
  let retMonth = MonthInDays[targetMonth] - MonthInDays[currentMonth];
  let retDay = targetDay - currentDay;

  return retYear + retMonth + retDay;
};
// +1 if leap year
