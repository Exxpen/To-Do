List = new Mongo.Collection("list");

List.allow({
	insert: function (userId, list) {
		return userId && list.owner === userId;
	},
	update: function (userId, list, fields, modifier) {
		return userId && list.owner === userId;
	},
	remove: function (userId, list) {
		return userId && list.owner === userId;
	}
});