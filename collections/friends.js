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
    console.log(userToAdd);
    if(userToAdd) {
      var friend = {
        username: username,
        userId: userToAdd._id,
        belongsTo: user._id
      }
      console.log(friend);
      Friends.insert(friend);
    }
    return userToAdd;
  }
});
