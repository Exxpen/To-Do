List = new Mongo.Collection("list");

if (Meteor.isClient) {
	angular.module("To-Do",['angular-meteor']);

	angular.module("To-Do").controller("MainController", function($scope, $meteor) {

		$scope.list = $meteor.collection(List);

		$scope.newTask = "";

		$scope.submit = function() {
			if($scope.newTask) {
				$scope.list.push({
					task: $scope.newTask,
					createdAt: new Date(),
					isDone: false
				});
				$scope.newTask = "";
			}
		}

		$scope.remove = function(object) {
			$scope.list.splice($scope.list.indexOf(object), 1);
		};

		$scope.sort = {
			name: "Ascending",
			value: "-"
		};
		$scope.sortChange = function() {
			if($scope.sort.value == "-") {
				$scope.sort.name = "Descending";
				$scope.sort.value = "+";
			} else {
				$scope.sort.name = "Ascending";
				$scope.sort.value = "-";
			}
		}


	});
} 

if (Meteor.isServer) {
	Meteor.startup(function() {
		if (List.find().count() === 0) {
			var list = [{
				task: "this is my task1",
				date: new Date(),
				isDone: false
			},{
				task: "this is my task2",
				date: new Date(),
				isDone: false
			},{
				task: "this is my task3",
				date: new Date(),
				isDone: false
			}];

			for(var i = 0; i < list.length; i++) {
				List.insert(list[i]);
			};
		}
	});
}