Friends = new Meteor.Collection('friends');

Friends.allow({
  insert: function(userId, friend) {
    console.log(friend);
    return !! userId;
  }
});
