var React = require('react');
var action = require('./../actions/NotToDoHabitActionCreator.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return {input:''};
    },
    handleInputName: function(e){
        this.setState({input : e.target.value});
    },
    addHabit: function(e){
        e.preventDefault();
        action.add({
            name: this.state.input
        });
        this.setState({
            input:''
        });
    },
    render: function() {
    return (
      <div className="add-new mdl-card__actions">
        <form onSubmit={this.addHabit}>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input value={this.state.input} onChange={this.handleInputName} className="mdl-textfield__input" type="text" id="habit-name"/>
              <label className="mdl-textfield__label" htmlFor="habit-name">Habit name...</label>
            </div>
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">add</i>
            </button>
          </form>
        </div>
      );
    }
  });
