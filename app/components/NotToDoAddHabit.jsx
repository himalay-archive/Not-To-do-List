var React = require('react');
module.exports = React.createClass({
  render: function() {
    return (
      <div className="add-new mdl-card__actions">
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="habit-name"/>
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
