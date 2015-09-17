Meteor.startup(function() {
	if (List.find().count() === 0) {
		var list = [{
			task: "The Server...",
			date: new Date(),
			isDone: false
		},{
			task: "Has Just...",
			date: new Date(),
			isDone: false
		},{
			task: "Started!",
			date: new Date(),
			isDone: false
		}];

		for(var i = 0; i < list.length; i++) {
			List.insert(list[i]);
		};
	}
});