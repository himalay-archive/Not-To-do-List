var React = require('react');
var action = require('./../actions/NotToDoHabitActionCreator.jsx');
module.exports = React.createClass({
  delete: function(e) {
    e.preventDefault();
    action.delete(this.props.habit);
  },

  toggleDone: function(e) {
    e.preventDefault();
    if (this.props.habit.done) {
      action.done(this.props.habit);
    } else {
      action.notDone(this.props.habit);
    }
  },

  render: function() {
    return (/*jscs:disable validateQuoteMarks*/
      <li> <form onSubmit={this.toggleDone} className="inline">
      <button className={this.props.habit.done
        ? 'mdl-button mdl-js-button mdl-button--icon mdl-button--accent'
        : 'mdl-button mdl-js-button mdl-button--icon mdl-button--colored'}>
        <i className="material-icons">{this.props.habit.done
            ? 'done_all'
            : 'done'}</i>
      </button>
    </form> < h4 className = {
      this.props.habit.done
        ? 'inline strikethrough mdl-color-text--accent'
        : 'inline'
    } > {
      this.props.habit.name
    } < /h4>
        <form onSubmit={this.delete} className="inline pull-right">
          <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--accent">
            <i className="material-icons">clear</i > </button> < /form>
      </li >
    /*jscs:enable validateQuoteMarks*/);
  },
});
