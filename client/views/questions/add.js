Template.questionAdd.events({
  'submit form': function(e) {
    e.preventDefault();
    var question = {
      questionText: $(e.target).find('[name=questionText]').val()
    }

    question._id = Questions.insert(question);
    
    Router.go('questionView');
  }
});
