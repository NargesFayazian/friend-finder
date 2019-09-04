
var path = require('path');

//ROUTES
// =============================================================

module.exports = function(app){
  //create GET route that displays the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};
