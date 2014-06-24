Meteor.startup(function() {
	Transform = require('famous/core/Transform');
	Transitionable = require("famous/transitions/Transitionable");
	SpringTransition = require("famous/transitions/SpringTransition");
	SnapTransition = require('famous/transitions/SnapTransition');
	TweenTransition = require('famous/transitions/TweenTransition');
	WallTransition = require('famous/transitions/WallTransition');
	// FastClick        = require("famous/inputs/FastClick");

	Transitionable.registerMethod('wall', WallTransition);

	trans = {
      method: 'wall',
      period: 200,
      dampingRatio: 0.5,
      velocity: 1
    };
});
