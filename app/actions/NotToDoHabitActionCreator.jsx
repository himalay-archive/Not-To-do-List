var dispatcher = require('./../dispatcher.js');
module.exports = {
    add: function(habit){
        dispatcher.dispatch({
            payload: habit,
            type: 'not-to-do-habit:add'
        });
    }
};
