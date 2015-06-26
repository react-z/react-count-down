'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateBetween = require('./DateBetween');

var _DateBetween2 = _interopRequireDefault(_DateBetween);

/**
 * Count down module
 * A simple count down component.
**/

var CountDown = _react2['default'].createClass({
  displayName: 'CountDown',

  getInitialState: function getInitialState() {
    return {
      remaining: null
    };
  },

  /** 
   * Tick the counter down.
  **/
  tick: function tick() {
    var startDate = new Date();
    var endDate = new Date(this.props.options.endDate);
    var remaining = (0, _DateBetween2['default'])(startDate, endDate);
    this.setState({ remaining: remaining });
  },
  componentDidMount: function componentDidMount() {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'react-count-down' },
      _react2['default'].createElement(
        'span',
        { className: 'date' },
        ' ',
        this.state.remaining
      ),
      _react2['default'].createElement(
        'span',
        { className: 'prefix' },
        ' ',
        this.props.options.prefix
      )
    );
  }
});

module.exports = CountDown;