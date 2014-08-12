Template.signup.events({
  'click #cancel' : function(e) {
    e.preventDefault();
    Router.go("splash");
  },
	'submit form' : function(e, t) {
		e.preventDefault();
		var username = t.find('[name=username]').value;
    var password = t.find('[name=password]').value;

		// Trim and validate the input

		Accounts.createUser({
			username : username,
			password : password
		}, function(err) {
			if (err) {
				console.log(err);
				// Inform the user that account creation failed
			} else {

				//Meteor.loginWithPassword(username,password);
				Router.go("questionView");
				// Success. Account has been created and the user
				// has logged in successfully.
			}

		});

		return false;
	}
});

Template.login.events({
  'click #cancel' : function(e) {
    e.preventDefault();
    Router.go("splash");
   },
	'submit form' : function(e, t) {
		e.preventDefault();
		// retrieve the input field values
		var username = t.find('[name=username]').value;
    var password = t.find('[name=password]').value;

		// Trim and validate your fields here....

		// If validation passes, supply the appropriate fields to the
		// Meteor.loginWithPassword() function.
		Meteor.loginWithPassword(username, password, function(err) {
			if (err) {
			  console.log(err);	
			}
			// The user might not have been found, or their passwword
			// could be incorrect. Inform the user that their
			// login attempt has failed.
			else {
				Router.go('questionView');
			}
			// The user has been logged in.
		});
		return false;
	}
}); 
