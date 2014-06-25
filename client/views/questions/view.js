
/*
Template.question_view.rendered = function() {
	var famousData = famousCmp.dataFromTpl(this);
	famousData.modifier.setTransform(Transform.translate(0, 0), trans);
}; */


Template.questionView.helpers({
  question: function() {
  	var questions = Questions.find().fetch();
    return questions[Math.floor(Math.random()*questions.length)];
  }
});

Template.questionText.events({
  'click .yes': function(e) {
    e.preventDefault();
    Meteor.call('yes', this._id);
  },
  'click .no': function(e) {
    e.preventDefault();
    Meteor.call('no', this._id);
  }
});