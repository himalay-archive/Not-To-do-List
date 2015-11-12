var express = require('express');
var app = new express();
var parser = require('body-parser');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var NotToDoHabitModel = require('./models/NotToDoHabit');

require('babel-core/register')({
  presets: ['es2015', 'react'],
});

require('./db.js');

app.get('/', function(req, res) {
  //res.render('./../app/index.ejs', {});
  var reactApp = React.createFactory(require('./../app/components/NotToDoHabitList.jsx'));
  NotToDoHabitModel
  .find()
  .sort('-timestamp')
  .exec(function(err, habits) {
    var generated = ReactDOMServer.renderToString(reactApp({
      habits: habits,
    }));
    res.render('./../app/index.ejs', {
      reactOutput: generated,
    });
  });
}).use(express.static(__dirname + '/../dist')).listen(7777);

app.use(parser.json());

app.use(parser.urlencoded({
  extended: false,
}));

require('./routes/habits')(app);
