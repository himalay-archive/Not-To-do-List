var dispatcher = require('./../dispatcher.js');

function NotToDoHabitStore(){
    var habits = [
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
    var listeners = [];

    function getHabits(){
        return habits;
    }

    function addNotToDoHabit(habit){
        habits.unshift(habit);
        triggerListeners();
    }

    function onChange(listener){
        listeners.push(listener);
    }

    function triggerListeners(){
        listeners.forEach(function(listener){
            listener(habits);
        });
    }
    dispatcher.register(function(event){
        var split = event.type.split(':');
        if(split[0]=='not-to-do-habit'){
            switch(split[1]){
                case 'add':
                    addNotToDoHabit(event.payload);
                    break;

            }
        }
    });

    return {
        getHabits: getHabits,
        onChange: onChange,
    };
}

module.exports = new NotToDoHabitStore();
