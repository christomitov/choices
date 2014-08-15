Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('questionList', {
    path: '/',
    waitOn: function() { return Meteor.subscribe('questionList'); },
  });

  this.route('questionView', {
    path : '/question/view',
    waitOn: function() { return Meteor.subscribe('questions'); },
  });

  this.route('friends', {
    path : '/friends',
    waitOn: function() { return Meteor.subscribe('friends'); },
  });

  this.route('friendsAdd', {
    path : '/friends/add'
  });

  this.route('questionAdd', {
    path : '/question/add'
  });

  this.route('splash', {
    path : '/splash',
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
