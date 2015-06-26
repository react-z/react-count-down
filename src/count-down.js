import React from 'react'
import DateBetween from './DateBetween'

/**
 * Count down module
 * A simple count down component.
**/

let CountDown = React.createClass({
  getInitialState: function(){
     return {
       remaining: null
     }
  },
  
  /** 
   * Tick the counter down.
  **/
  tick: function() {
    let startDate = new Date();
    let endDate = new Date(this.props.options.endDate);
    let remaining = DateBetween(startDate, endDate);
    this.setState({remaining: remaining });
  },
  componentDidMount: function() {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },  
  render: function(){
    return (
      <div className="react-count-down">
       <span className="date"> {this.state.remaining}</span>
       <span className="prefix"> {this.props.options.prefix}</span>
      </div>
    );
  }
});

module.exports = CountDown;