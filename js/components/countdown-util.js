// converts seconds into hours
export const secondsToHours = (seconds) => {
  let minutes = seconds / 60;
  let hours = minutes / 60;
  return Math.floor(hours);
};

// Converts JS Date Object into Date String
export const getDateString = function(dateObj) {
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let day = dateObj.getDate();

  month = (month < 10) ? `0${month}` : month;
  day = (day < 10) ? `0${day}` : day;

  return year + '-' + month + '-' + day;
};

// This works
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
};

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
};

// console.log(daydiff(parseDate($('#first').val()), parseDate($('#second').val())));
