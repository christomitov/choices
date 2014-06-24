Template.question_add.rendered = function() {
	var famousData = famousCmp.dataFromTpl(this);
	famousData.modifier.setTransform(Transform.translate(0, 0), trans);
}; 

Template.question_add.events({
  'submit form': function(e) {
    e.preventDefault();

    var question = {
      questionText: $(e.target).find('[name=questionText]').val()
    }

    question._id = Questions.insert(question);
    Router.go('questionView');
  }
});