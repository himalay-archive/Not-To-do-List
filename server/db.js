var mongoose = require('mongoose');
var dbURI = 'mongodb://127.0.0.1/not-to-do';
var NotToDoHabitModel = require('./models/NotToDoHabit');

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('[Mongoose] default connection open to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('[Mongoose] default connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('[Mongoose] default connection disconnected');
});

mongoose.connection.on('open', function() {
  console.log('[Mongoose] default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('[Mongoose] default connection disconnected through app termination');
    process.exit(0);
  });
});
