var React = require('react');
var CountDown = require('../jsx/count-down.jsx');

var OPTIONS = { endDate: '06/03/2015 10:12 AM', prefix: 'until my birthday!' }

React.render(React.createElement(CountDown, {options: OPTIONS}), document.getElementById("container"));
