// If you decide to add some routing through Express
module.exports = function(app) {

  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/layout.html');
  });
};
