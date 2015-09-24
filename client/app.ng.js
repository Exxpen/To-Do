angular.module("To-Do",['angular-meteor']);

angular.module("To-Do").controller("MainController", function($scope, $meteor, $rootScope) {

	$scope.list = $meteor.collection(List).subscribe("list");

	$scope.submit = function() {
		if($scope.newTask) {
			$scope.list.push({
				owner: $rootScope.currentUser._id,
				task: $scope.newTask,
				createdAt: new Date(),
				isDone: false
			});
			$scope.newTask = "";
		}
	};

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
	};


});
