'use strict';

var DateBetween = function DateBetween(startDate, endDate) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;

  if (distance < 0) {
    return 'count down date expired';
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor(distance % day / hour);
  var minutes = Math.floor(distance % hour / minute);
  var seconds = Math.floor(distance % minute / second);

  var between = days + ' days ';
  between += hours + ' hours ';
  between += minutes + ' minutes ';
  between += seconds + ' seconds';

  return between;
};

module.exports = DateBetween;