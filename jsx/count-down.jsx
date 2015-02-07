/** @jsx React.DOM */

var React = require('react');
var DateBetween = require('../js/date-between.js');

/**
 * Count down module
 * A simple count down component.
**/

var Timer = React.createClass({
  getInitialState: function(){
     return {
       endDate: this.props.options.endDate,
       prefix: this.props.options.prefix
     }
  },
  /** 
   * Tick the counter down.
  **/
  tick: function() {
    var startDate = new Date();
    var endDate = new Date(this.state.endDate);
    var remaining = DateBetween(startDate, endDate);
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
       <span className="prefix"> {this.state.prefix}</span>
      </div>
    );
  }
});

module.exports = Timer;