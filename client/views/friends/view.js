Template.friends.helpers({
  friends: function() {
    return Friends.find().fetch();
  }
});

Template.friends.events({
  'click li#add' : function(e) {
    Router.go("friendsAdd");
  },
  'click li.friend' : function(e) {
    $(e.target).toggleClass("selected");
  },
});
