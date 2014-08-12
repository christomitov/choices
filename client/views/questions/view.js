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
