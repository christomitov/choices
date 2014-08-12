Template.friendsAdd.events({
  'submit form' : function(e) {
    e.preventDefault();
    
    var friend = {
      name: $(e.target).find('[name=name]').val(),
    };

    friend._id = Friends.insert(friend);
    Router.go("friends");
  }
});
