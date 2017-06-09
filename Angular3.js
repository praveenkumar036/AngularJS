AngularJS Views:
---------------

AngularJS supports Single Page Application via multiple views on single page .
To do this Angular JS has provided directive and services.
=|Directive = ng-view and ng-template 
=|Services = $routeProvider

ng-view
-------
ng-view directive is used to display the HTML templates or views in the specified routes.Every time the current route changes,
the include view changes with it according to the configuration of the $route service.

ng-view tag simply creates a place holder where a corresponding view (html or ng-template view) can be placed
based on configuration.

Usage:

Define a div with ng-view within main module.

<div ng-app = "mainApp">
...
 <div ng-view></div>
 
</div>


ng-template
-----------

.ng-template directive is used to create an html view using script tag.
.It contains "id" attribute which is used by $routeProvider to map a view
 with controller.

Usgae:

Define a script block with type as ng-template within the main module.

<div ng-app = "mainApp">
   ...
   
   <script type="text/ng-template" id = "addStudent.html">
   <h2> Add Students </h2>
   {{message}}
   </script>
   
</div>


$routeProvider
--------------
. $routeProvider is the key service which set the configuraion of urls, map them with the corresponding 
  html page or ng-template , and attach a controller with the same.
  .$routeProvider is used to configure the routes. We use ng-Route config() to configure the $routeProvider as a parameter 
    and the routing configuration goes inside the function.
  
. It accepts either the when() or otherwise() method.
. Link: http://www.journaldev.com/6225/angularjs-routing-example-ngroute-routeprovider (It has Example)

Usage 
-----

Define a scipt block with main module and set the routing configuration.

var mainApp = angular.module("mainApp",['ngRoute']);

mainApp.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.
					when('/addStudent',{templateUrl:'addStudent.html',controller:'AddStudentController'}).
					when('/viewStudent',{templateUrl: 'viewStudents.html',controller:'ViewStudentController'}).
					otherwise({
						
						redirectTo: '/addStudent'
					});
	
	
}]);



AngularJS "ngRoute" module provides routing.
When method takes a "path" and a "route" as a parameters.
                    ------       -------
PATH - It is a part of URL after the # symobol in link.
ROUTE - Contains two properties - templateUrl and controller
                 --------------
  1. templateUrl : property defines which HTML template AngularJS should load and display inside the DIV
                   with the ng-view directive.  
  2. controller : property defines which controllers should be used with HTML template.

  Note :-
  When the application is loaded , "path" is matched against the part of the URL after the # symbol.
  If no route paths matches the given URL browser will be redirected to the path specified in the
  otherwise() function.
  
  
  Example : check folder - AngulsrJsView-routeProvider_Example2
  
  
  1. Create a module named mainApp and load ngRoute as a dependent module.
  2. Configure the route using $routeProvider.
  3. We use two paths in the example , /home and /viewStudents.
  4. We use only a single controller in this example, studentController
  5. studentController is initialized with an array of student and a message.
     We will be showing the message in the homepage and the students list in viewStudent page.
  6. save the file as main.js
  
  
  
 E.g :   //main.js  
      var mainApp = angular.module("mainApp", ['ngRoute']);
             
             mainApp.config(function($routeProvider) {
             	$routeProvider
             		.when('/home', {
             			templateUrl: 'home.html',
             			controller: 'StudentController'
             		})
             		.when('/viewStudents', {
             			templateUrl: 'viewStudents.html',
             			controller: 'StudentController'
             		})
             		.otherwise({
             			redirectTo: '/home'
             		});
             });
             
             mainApp.controller('StudentController', function($scope) {
             	$scope.students = [
             		{name: 'Mark Waugh', city:'New York'},
             		{name: 'Steve Jonathan', city:'London'},
             		{name: 'John Marcus', city:'Paris'}
             	];
             
             	$scope.message = "Click on the hyper link to view the students list.";
             });
            
 For Ex: - if the URL is like www.abc.com/index.html#/home,
The URL part after the #matches /home , it will load.html page and
if matches /viewStudents then it will load viewStudents.html into the web page.
If nothing matches then it will go in the otherwise condition and page wil be redirected to home.html


--------------- Now we create our views and save as home.html and viewStudents.html files.

home.html

************
The class attributes is mostly used to point to a class in a style sheet ,
it can also be used by a javascript (via the HTML DOM ) to make changes to HTML 
elements with a specified class.
************

<div class="container">
  <h2> Welcome </h2>
  <p>{{message}}</p>
  <a href="#viewStudents">View Students List</a>
</div>
  
This is the default page of our application . In the view , we just print out the message.
Which we have already initialized in the studentController.
You can also see alink to the viewStudents page.


<div class="container">
<h2> View Students </h2>
Search:

<br/>
<input type = "text" ng-model="name" />
<br/>

<ul>
 <li ng-repeat="student in students" | filter:name>
 {{students.name}},{{students.city}}
 </li>
 
</ul>
<a href="#/home">Back</a>
</div>

In the above view, you can see a list of students with search option.

Finally, follow below steps to complete our AngularJS routing example application.

.ng-app auto-bootstraps our application mainApp
.ng-view directive is the placeholder of the views - home.html and viewsStudent.html
.Include angular.min.js and angular-route.min.js
.Include main.js which we have created in the earlier steps.
.save the file as index.html


<!DOCTYPE html>
<html>
	<head lang="en">
	  <meta charset="utf-8">
	  <title>AngularJS Routing</title>

	</head>
	<body>

	  <div ng-app="mainApp">
		<ng-view></ng-view>
	  </div>

	  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js"></script>
	  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28//angular-route.min.js"></script>
	  <script type="text/javascript" src="main.js"></script>
	</body>
</html>
