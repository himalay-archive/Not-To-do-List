var React = require('react');
var ReactDOM = require('react-dom');
var NotToDoItemList = require('./components/NotToDoHabitList.jsx');
var initial = [
  {
    _id: 1,
    name: 'Swearing',
  }, {
    _id: 2,
    name: 'Smoke',
    done: true,
  }, {
    _id: 3,
    name: 'TV',
  }, {
    _id: 4,
    name: 'Fast Food',
    done: true,
  }, {
    _id: 5,
    name: 'Video Games',
  },{
    _id: 6,
    name: 'Movies',
  },{
    _id: 7,
    name: 'Refined Sugar',
  },{
    _id: 8,
    name: 'Facebook',
  },{
    _id: 9,
    name: 'Snap-chat',
  },{
    _id: 10,
    name: 'Youtube',
  },

];
ReactDOM.render(<NotToDoItemList habits={initial} />, app);
