import Countdown from '../lib/Countdown' // 'react-count-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

const cb = () => {
	console.log('expired callback')
}

const OPTIONS = { endDate: '03/01/2018 10:55 AM', prefix: 'until my birthday!', cb}

const TestComponent = () => (
	<div>
        <Countdown options={OPTIONS} />
    </div>
)

ReactDOM.render( <TestComponent />, document.getElementById('root') )
