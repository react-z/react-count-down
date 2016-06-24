let DateBetween = function(startDate, endDate) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return "count down date expired";
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  var day_description;
  var hour_description;
  var min_description;
  var sec_description;

  if(days == 1) {
    day_description = ' day ';
  } else {
    day_description = ' days ';
  }

  if(hours == 1) {
    hour_description = ' hour ';
  } else {
    hour_description = ' hours ';
  }

  if(minutes == 1) {
    min_description = ' minute ';
  } else {
    min_description = ' minutes ';
  }

  if(seconds == 1) {
    sec_description = ' second';
  } else {
    sec_description = ' seconds';
  }

  let between = days + day_description;
  between += hours + hour_description;
  between += minutes + min_description;
  between += seconds + sec_description;

  return between;
}

module.exports = DateBetween;
