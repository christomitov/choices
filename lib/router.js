Router.configure({
	layoutTemplate : 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() {
	this.route('question_view', {
		path : '/'
	});
	this.route('question_add', {
		path : '/question/add'
	});
	this.route('splash', {
		layoutTemplate: 'login_layout'
	});
	this.route('login', {
		path : '/login',
		layoutTemplate: 'login_layout'
	});
	this.route('signup', {
		path : '/signup',
		layoutTemplate: 'login_layout'
	});
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    Router.go('splash');
    pause();
  }
}


Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {except: ['splash','login','signup']});