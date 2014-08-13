Friends = new Meteor.Collection('friends');

Friends.allow({
  insert: function(userId, friend) {
    return !! userId;
  }
});

Meteor.methods({
  userExists: function(username) {
    check(username, String);
    var user = Meteor.user();
    var userToAdd = Meteor.users.findOne({username: username});
    if(userToAdd) {
      Friends.insert({
        username: username, 
        userId: userToAdd._id,
        belongsTo: user._id
      });
    }
    return userToAdd;
  }
});
