Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('friends', function() {
  return Friends.find();
});
