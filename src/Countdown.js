import DateBetween from './DateBetween'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Count down module
 * A simple count down component.
 **/
export default class Countdown extends Component {
  static get propTypes() {
    return {
      options: PropTypes.object
    }
  }

  constructor(props) {
    super(props)
    this.state = { remaining: null }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    let startDate = new Date()
    let endDate = new Date(this.props.options.endDate)
    let remaining = DateBetween(startDate, endDate)

    if (remaining === false) {
      window.clearInterval(this.interval)
      this.props.options['cb'] ? this.props.options.cb() : false
    }

    this.setState({
      remaining: remaining ? remaining : 'time expired'
    })
  }

  render() {
    const countDownWrapper = {
      margin: 0,
      padding: '10px'
    }

    const date = {
      fontSize: '150%',
      fontWeight: '200',
      lineHeight: 1.5,
      color: '#666'
    }

    const prefix = {
      fontSize: '150%',
      fontWeight: '200',
      lineHeight: 1.5,
      color: '#03CC85'
    }

    return (
      <div style={countDownWrapper}>
        <span style={date}> {this.state.remaining}</span>
        <span style={prefix}> {this.props.options.prefix}</span>
      </div>
    )
  }
}
