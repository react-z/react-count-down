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

  let between = days + ' days ';
  between += hours + ' hours ';
  between += minutes + ' minutes ';
  between += seconds + ' seconds';

  return between;
}

module.exports = DateBetween;