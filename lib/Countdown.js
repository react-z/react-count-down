'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DateBetween = require('./DateBetween');

var _DateBetween2 = _interopRequireDefault(_DateBetween);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Count down module
 * A simple count down component.
**/
var Countdown = function (_Component) {
  _inherits(Countdown, _Component);

  function Countdown(props) {
    _classCallCheck(this, Countdown);

    var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this, props));

    _this.state = { remaining: null };
    return _this;
  }

  _createClass(Countdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
      this.interval = setInterval(this.tick.bind(this), 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'tick',
    value: function tick() {
      var startDate = new Date();
      var endDate = new Date(this.props.options.endDate);
      var remaining = (0, _DateBetween2.default)(startDate, endDate);

      if (remaining === false) {
        window.clearInterval(this.interval);
        this.props.options['cb'] ? this.props.options.cb() : false;
      }

      this.setState({
        remaining: remaining ? remaining : 'time expired'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'react-count-down' },
        _react2.default.createElement(
          'span',
          { className: 'date' },
          ' ',
          this.state.remaining
        ),
        _react2.default.createElement(
          'span',
          { className: 'prefix' },
          ' ',
          this.props.options.prefix
        )
      );
    }
  }]);

  return Countdown;
}(_react.Component);

exports.default = Countdown;