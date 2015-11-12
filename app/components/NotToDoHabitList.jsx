var React = require('react');
var NotToDoHabit = require('./NotToDoHabit.jsx');
var NotToDoAddHabit = require('./NotToDoAddHabit.jsx');

module.exports = React.createClass({
  render: function() {
    return (/*jscs:disable validateQuoteMarks*/
      <div className="container">
      <div className="fixed-header mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="header-row">
        <img src="android-chrome-48x48.png"/>
          <span className="mdl-layout-title">Not To-do List</span>
        </div>
      </header>
    </div>
        <NotToDoAddHabit/>
        <ul className="habit-list"> {
      this
        .props
        .habits
        .map(function(habit, index) {
          return (
            <NotToDoHabit habit={habit} key={'habit' + index}/>
          );
        })
    } </ul>
          </div>
        /*jscs:enable validateQuoteMarks*/);
  },
});
