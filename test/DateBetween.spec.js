var test = require('tape');
var DateBetween = require('../lib/DateBetween.js');

var date1 = new Date("Fri Feb 06 2015 18:07:30");
var date2 = new Date("Fri Feb 07 2015 18:07:30");
var difference = DateBetween(date1, date2);

test('difference between 2 dates is equal to 1 day', function (t) {
    t.equal(difference, "1 day");
    t.end();
});
