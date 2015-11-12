var mongoose = require('mongoose');
var NotToDoHabitSchema = {
  name: String,
  done: {type: Boolean, default: false},
  _id: String,
  timestamp: { type: Date, default: Date.now },
};

var NotToDoHabit = mongoose.model('NotToDoHabit', NotToDoHabitSchema, 'notToDoHabits');

module.exports = NotToDoHabit;
