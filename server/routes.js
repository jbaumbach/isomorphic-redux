module.exports = (app) => {
  app.get('/api/v1/todos', function(req, res) {
    res.status(200).send([
      'got some lovely za coming',
      'luke, i am your fasha',
      'i have a feeling this is a shared server',
      'Yoda here he wasn\'t'
    ]);
  });
};
