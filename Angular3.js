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
  
  
  1. create a module named mainApp and load ngRoute as a dependent module.
  
  main.js 
  





