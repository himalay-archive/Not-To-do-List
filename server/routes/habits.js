module.exports = function(app){
  var habits = [
    {
      _id: 1,
      name: 'Swearing',
    },
    {
      _id: 2,
      name: 'Smoke',
      done: true,
    },
  ];
  app.route('/api/habits')
    .get(function(req, res){
      res.send(habits);
    })
    .post(function(req, res){
      habits.unshift(req.body);
    });
};
