# react-count-down

[![npm version](https://badge.fury.io/js/react-count-down.svg)](https://badge.fury.io/js/react-count-down)

react-count-down is a simple count down component using react.

## Installation

`npm install react-count-down --save`

## Usage

```javascript
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

const cb = () => {
  console.log('expired callback')
}

const OPTIONS = { endDate: '03/01/2018 10:55 AM', prefix: 'until my birthday!', cb}

const TestComponent = () => (
  <Countdown options={OPTIONS} />
)

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Styles

react-count-down can be used with your own custom styles. A minimal [countdown.css](https://github.com/StevenIseki/react-count-down/blob/master/example/public/countdown.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
