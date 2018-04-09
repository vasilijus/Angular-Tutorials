mainApp.controller("studentController", function($scope){
	$scope.student = {
		firstName:"Sergej",
		lastName:"Vasil",
		fees:500,
		
		subjects : [
			{name:'Math',marks:50},
			{name:'Mith',marks:80},
			{name:'Sport',marks:70},
			{name:'Bio',marks:30},
		],
		
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
});