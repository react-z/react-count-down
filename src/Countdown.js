import DateBetween from './DateBetween'
import React, { Component, PropTypes } from 'react'

/**
 * Count down module
 * A simple count down component.
**/
export default class Countdown extends Component {

  constructor (props) {
    super(props)
    this.state = { remaining: null }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), this.props.tickInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    let startDate = new Date()
    let endDate = new Date(this.props.options.endDate)
    let remaining = DateBetween(startDate, endDate)

    if(remaining === false){
      window.clearInterval(this.interval)
      this.props.options['cb'] ? this.props.options.cb() :  false
    }

    this.setState({
      remaining: remaining ? remaining : 'time expired'
    })
  }

  render() {
    const html = { __html: this.state.remaining };
    return (
      <div className="react-count-down">
       <span className="date" dangerouslySetInnerHTML={html}/>
       <span className="prefix"> {this.props.options.prefix}</span>
      </div>
    )
  };
}

Countdown.defaultProps = {
  tickInterval: 60000
}

Countdown.propTypes = {
  tickInterval: PropTypes.number /* millisecond */
};