'use strict';

var DateBetween = function DateBetween(startDate, endDate) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;

  if (distance < 0) {
    return false;
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor(distance % day / hour);
  var minutes = Math.floor(distance % hour / minute);
  var seconds = Math.floor(distance % minute / second);

  var between = [];

  days > 0 ? between.push(days + ' day' + (days > 1 ? 's' : '')) : false;
  hours > 0 ? between.push(hours + ' hour' + (hours > 1 ? 's' : '')) : false;
  minutes > 0 ? between.push(minutes + ' minute' + (minutes > 1 ? 's' : '')) : false;
  seconds > 0 ? between.push(seconds + ' second' + (seconds > 1 ? 's' : '')) : false;

  return between.join(' ');
};

module.exports = DateBetween;