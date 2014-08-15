Template.questionAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    var idList = Session.get("usersToQuestion");
    var question = {
      questionText: $(e.target).find('[name=questionText]').val()
    }
    for(var i = 0; i < idList.length; i++) {
      question.forUser = idList[i];
      question.belongsTo = Meteor.user()._id;
      question.username = Meteor.user().username;
      Questions.insert(question);
    }

    Router.go('questionView');
  }
});
