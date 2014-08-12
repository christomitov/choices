Template.friends.helpers({
  friends: function() {
    var friends = Friends.find().fetch();
    return friends;
  }
});

Template.friends.events({
  'click li#add' : function(e) {
    Router.go("friendsAdd");
  },
  'click li.friend' : function(e) {
    $(e.target).toggleClass("selected");
  }
});
