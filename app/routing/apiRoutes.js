
var friends = require('../data/friends.js');

// ROUTES
// =============================================================
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

app.post('/api/friends', function (req, res) {
  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };
  var newFriendData = req.body;
  var newFriendScores = newFriendData.scores;
  var totalDifference;
  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;

    console.log(currentFriend.name);
    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = newFriendScores[j];
      totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
   
    friends.push(newFriendData);

    res.json(bestMatch);

  });
};