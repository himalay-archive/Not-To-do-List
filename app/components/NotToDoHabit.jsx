var React = require('react');
module.exports = React.createClass({
  render: function() {
    return (
      <li key={this.props.habit._id}><h4 className={this.props.habit.done ? 'habit strikethrough mdl-color-text--red' : 'habit'}>{this.props.habit.name}</h4></li>
    );
  }
});
