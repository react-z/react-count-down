import React from 'react'
import CountDown from '../lib/count-down'

let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'until my birthday!' }

React.render(React.createElement(CountDown, {options: OPTIONS}), document.getElementById("container"));