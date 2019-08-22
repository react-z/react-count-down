"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Countdown = _interopRequireDefault(require("../Countdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Countdown renders the correct elements and props', function () {
  var OPTIONS = {
    endDate: '03/01/2020 10:55 AM',
    prefix: 'until my birthday!',
    cb: jest.fn()
  };
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Countdown.default, {
    options: OPTIONS
  }));
  expect(wrapper.instance().props.options).toEqual(OPTIONS);
  expect(wrapper.find('span').length).toEqual(2);
  expect(wrapper.find('span').first().text()).toContain('days');
  expect(wrapper.find('span').last().text()).toContain('until my birthday!');
  setTimeout(function () {
    expect(wrapper.instance().props.options.cb).toBeCalled();
  }, 0); // console.log(wrapper.debug())
});