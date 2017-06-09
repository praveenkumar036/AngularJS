
var mainApp = angular.module("mainApp",['ngRoute']);

mainApp.config(function($routeProvider){
	
	$routeProvider
	.when('/home',{ templateUrl : 'home.html', 
	                controller : 'studentController'})
	.when('/viewStudents',{templateUrl: 'viewStudents.html',
                           controller: 'studentController'})
  .otherwise({redirectTo: '/home'})
});

mainApp.controller('studentController',function($scope){
	
	$scope.students ={
		college:"BNM",
		details:[
		{name : 'Sachin tendulkar',city:'Mumbai'},
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'},
	]};
	
	
   $scope.message = "Click on the hyper link to view the students list.";
	
})
