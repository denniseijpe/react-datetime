var DateTime = require('../DateTime.js');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(DateTime, {
    viewMode: 'days',
    isValidDate: function(current) {
      return current.isBefore(DateTime.moment().startOf('month'));
    }
  }),
  document.getElementById('datetime')
);
