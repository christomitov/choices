Template.questionList.helpers({
  questions : function() {
    return Questions.find().fetch();
  }
});
