var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.friends=[
	"Chrissy",
	"Katie",
	"Joshie",
	"Taylor",
	"Marta"
	];
	$scope.addFriend = function() {
		$scope.friends.push($scope.input);
	}
});