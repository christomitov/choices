Meteor.publish('questions', function() {
  return Questions.find({
    $or: [
      {forUser: this.userId}, 
      {belongsTo: this.userId}
    ]
  });
});

Meteor.publish('questionList', function() {
  return Questions.find({forUser: this.userId});
});

Meteor.publish('friends', function() {
  return Friends.find({belongsTo: this.userId});
});
