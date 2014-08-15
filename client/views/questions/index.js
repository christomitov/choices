Template.questionList.helpers({
  questions : function() {
    return Questions.find().fetch();
  }
});

Template.questionList.events({
  'click li' : function(e) {
    console.log('click');
  }
});
