"use strict";

var _DateBetween = _interopRequireDefault(require("../DateBetween"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('difference between 2 dates is equal to 1 day', function () {
  var date1 = new Date("Fri Feb 06 2015 18:07:30");
  var date2 = new Date("Fri Feb 07 2015 18:07:30");
  var difference = (0, _DateBetween.default)(date1, date2);
  expect(difference).toEqual("1 day");
});