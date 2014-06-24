Router.map(function() {
	this.route('questionView', {
		path : '/'
	});
}); 


Template.questionView.rendered = function() {
	var famousData = famousCmp.dataFromTpl(this);
	famousData.modifier.setTransform(Transform.translate(0, 0), trans);
}; 

Template.questionView.helpers({
  question: function() {
  	var questions = Questions.find().fetch();
    return questions[Math.floor(Math.random()*questions.length)];
  }
});