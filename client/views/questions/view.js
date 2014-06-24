
/*
Template.question_view.rendered = function() {
	var famousData = famousCmp.dataFromTpl(this);
	famousData.modifier.setTransform(Transform.translate(0, 0), trans);
}; */


Template.question_view.helpers({
  question: function() {
  	var questions = Questions.find().fetch();
    return questions[Math.floor(Math.random()*questions.length)];
  }
});