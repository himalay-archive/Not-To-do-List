var dispatcher = require('./../dispatcher.js');
module.exports = {
  add: function(habit) {
    dispatcher.dispatch({payload: habit, type: 'not-to-do-habit:add'});
  },

  delete: function(habit) {
    dispatcher.dispatch({payload: habit, type: 'not-to-do-habit:delete'});
  },

  done: function(habit) {
    dispatcher.dispatch({payload: habit, type: 'not-to-do-habit:done'});
  },

  notDone: function(habit) {
    dispatcher.dispatch({payload: habit, type: 'not-to-do-habit:not-done'});
  },
};
