var React = require('react');
var ReactDOM = require('react-dom');
var NotToDoItemList = require('./components/NotToDoHabitList.jsx');
var NotToDoHabitStore = require('./stores/NotToDoHabitStore.jsx');
var initial = NotToDoHabitStore.getHabits();

function render(){
  ReactDOM.render(<NotToDoItemList habits={initial} />, app);
}

NotToDoHabitStore.onChange(function(habits){
  initial = habits;
  render();
});

render();
