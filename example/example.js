var React = require('react');
var Timer = require('../jsx/count-down.jsx');

var OPTIONS = { endDate: '06/03/2015 10:12 AM', prefix: 'until my birthday!' }

React.render(React.createElement(Timer, {options: OPTIONS}), document.getElementById("container"));
