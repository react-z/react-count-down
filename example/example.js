import Countdown from '../lib/Countdown' // 'react-count-down'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {
    let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'until my birthday!' }

    return (
      <div>
        <Countdown options={OPTIONS} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
