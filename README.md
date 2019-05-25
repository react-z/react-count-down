# react-count-down

[![npm version](https://badge.fury.io/js/react-count-down.svg)](https://badge.fury.io/js/react-count-down)

react-count-down is a simple count down component using react.

## Installation

`yarn add react-count-down`

## Usage

```jsx
import Countdown from 'react-count-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

const cb = () => {
  console.log('expired callback')
}

const OPTIONS = {
  endDate: '03/01/2020 10:55 AM',
  prefix: 'until my birthday!',
  cb
}

const TestComponent = () => (
  <div>
    <Countdown options={OPTIONS} />
  </div>
)

ReactDOM.render(<TestComponent />, document.getElementById('root'))
```

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
