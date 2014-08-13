Template.friendsAdd.events({
  'submit form' : function(e) {
    e.preventDefault();
    
    var friend = {
      name: $(e.target).find('[name=name]').val(),
    };
    
    Meteor.call('userExists', friend.name, function(error, status) {
      if(status) {
        Router.go("friends");
      } else {
        console.log("can't add");
      }
    });
  }
});
