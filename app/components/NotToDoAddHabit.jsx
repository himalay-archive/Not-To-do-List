var React = require('react');
var action = require('./../actions/NotToDoHabitActionCreator.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {input: ''};
  },

  handleInputName: function(e) {
    this.setState({input: e.target.value});
  },

  addHabit: function(e) {
    e.preventDefault();
    if (this.state.input) {
      action.add({name: this.state.input});
      this.setState({input: ''});
    }
  },

  render: function() {
    return (/*jscs:disable validateQuoteMarks*/
      <div className="add-new mdl-card__actions">
        <form onSubmit={this.addHabit}>
          <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" value={this.state.input} onChange={this.handleInputName} id="habit-name"/>
              <label className="mdl-textfield__label" htmlFor="habit-name">I don't want to...</label>
          </div>
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect mdl-button--colored">
        <i className="material-icons">add</i>
      </button>
    </form> </div>
    /* jscs : enable validateQuoteMarks */);
  },
});
