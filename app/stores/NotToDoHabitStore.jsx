var dispatcher = require('./../dispatcher.js');
var api = require('./../helpers/RestHelper.js');
function NotToDoHabitStore() {
  var habits = [];
  var listeners = [];

  api.get('api/habits').then(function(data) {
    habits = data;
    triggerListeners();
  });

  function getHabits() {
    return habits;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners() {
    listeners.forEach(function(listener) {
      listener(habits);
    });
  }

  function addNotToDoHabit(habit) {
    habits.unshift(habit);
    api.post('api/habits', habit);
    triggerListeners();
  }

  function deleteNotToDoHabit(habit) {
    habits.splice(findHabitIndex(habit), 1);
    triggerListeners();
    api.del('api/habits/' + habit._id);
  }

  function setHabitDone(habit, isDone) {
    habits[findHabitIndex(habit)].done = isDone || false;
    triggerListeners();
    api.patch('api/habits/' + habit._id, habit);
  }

  function findHabitIndex(habit) {
    return habits.map(function(x) {
      return x._id;
    }).indexOf(habit._id);
  }

  dispatcher.register(function(event) {
    var split = event.type.split(':');
    if (split[0] == 'not-to-do-habit') {
      switch (split[1]) {
        case 'add':
          addNotToDoHabit(event.payload);
          break;
        case 'delete':
          deleteNotToDoHabit(event.payload);
          break;
        case 'done':
          setHabitDone(event.payload, false);
          break;
        case 'not-done':
          setHabitDone(event.payload, true);
          break;
      }
    }
  });

  return {getHabits: getHabits, onChange: onChange};
}

module.exports = new NotToDoHabitStore();
