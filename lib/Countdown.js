"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DateBetween = _interopRequireDefault(require("./DateBetween"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Count down module
 * A simple count down component.
 **/
var Countdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Countdown, _Component);

  _createClass(Countdown, null, [{
    key: "propTypes",
    get: function get() {
      return {
        options: _propTypes.default.object
      };
    }
  }]);

  function Countdown(props) {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Countdown).call(this, props));
    _this.state = {
      remaining: null
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tick();
      this.interval = setInterval(this.tick.bind(this), 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "tick",
    value: function tick() {
      var startDate = new Date();
      var endDate = new Date(this.props.options.endDate);
      var remaining = (0, _DateBetween.default)(startDate, endDate);

      if (remaining === false) {
        window.clearInterval(this.interval);
        this.props.options['cb'] ? this.props.options.cb() : false;
      }

      this.setState({
        remaining: remaining ? remaining : 'time expired'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var countDownWrapper = {
        margin: 0,
        padding: '10px'
      };
      var date = {
        fontSize: '150%',
        fontWeight: '200',
        lineHeight: 1.5,
        color: '#666'
      };
      var prefix = {
        fontSize: '150%',
        fontWeight: '200',
        lineHeight: 1.5,
        color: '#03CC85'
      };
      return _react.default.createElement("div", {
        style: countDownWrapper
      }, _react.default.createElement("span", {
        style: date
      }, " ", this.state.remaining), _react.default.createElement("span", {
        style: prefix
      }, " ", this.props.options.prefix));
    }
  }]);

  return Countdown;
}(_react.Component);

exports.default = Countdown;