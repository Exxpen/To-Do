Meteor.startup(function() {
	if (List.find().count() === 0) {
		var list = [{
			task: "The Server...",
			createdAt: new Date(),
			isDone: false
		},{
			task: "Has Just...",
			createdAt: new Date(),
			isDone: false
		},{
			task: "Started!",
			createdAt: new Date(),
			isDone: false
		}];

		for(var i = 0; i < list.length; i++) {
			List.insert(list[i]);
		};
	}
});