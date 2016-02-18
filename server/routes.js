module.exports = (app) => {
  app.get('/api/v1/users', function(req, res) {
    res.status(200).send({msg:'ohhhhhhh yeah'});
  });
}