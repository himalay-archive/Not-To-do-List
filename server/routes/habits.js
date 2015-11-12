module.exports = function(app) {
  var NotToDoHabitModel = require('./../models/NotToDoHabit');

  app.route('/api/habits')
    .get(function(req, res) {
      NotToDoHabitModel.find()
      .sort('-timestamp')
      .exec(function(err, habits) {
        if (err) throw err;
        res.send(habits);
      });
    })
    .post(function(req, res) {
      var NotToDoHabit = new NotToDoHabitModel(req.body);
      NotToDoHabit.save(function(err) {
        if (err) throw err;
        res.status(300).send();
      });
    });

  app.route('/api/habits/:_id')
    .delete(function(req, res) {
      NotToDoHabitModel.find({_id: req.params._id})
      .remove(function(x) {
        console.log('[DELETE]', x);
      });
    })
    .patch(function(req, res) {
      NotToDoHabitModel.findOne({_id: req.body._id}, function(err, habit) {
        if (err) throw err;
        if (habit) {
          for (var key in req.body) {
            habit[key] = req.body[key];
          }

          habit.save();
        }

        res.status(200).send();
      });
    });
};
