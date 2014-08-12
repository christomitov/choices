Questions = new Meteor.Collection('questions');

Questions.allow({
  insert: function(userId, question) {
    // only allow posting if you are logged in
    return !! userId;
  }
});



Meteor.methods({
  yes: function(questionId) {
  	var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to vote");
    var question = Questions.findOne(questionId);
    if (!question)
      throw new Meteor.Error(422, 'Question not found');
    if (_.include(question.voters, user._id))
      throw new Meteor.Error(422, 'Already voted');
    Questions.update(question._id, {
      $addToSet: {voters: user._id},
      $inc: {yes: 1}
    });
    Router.go("questionView");
  },
  no: function(questionId) {
		var user = Meteor.user();
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to vote");
    var question = Questions.findOne(questionId);
    if (!question)
      throw new Meteor.Error(422, 'Question not found');
    if (_.include(question.voters, user._id))
      throw new Meteor.Error(422, 'Already voted');
    Questions.update(question._id, {
      $addToSet: {voters: user._id},
      $inc: {no: 1}
    });
    Router.go("questionView");
  }
});
