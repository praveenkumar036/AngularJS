AngularJS HTML DOM
------------------

Folowing directive can be used to bind application data to attribute of HTML DOM elemnets.

1. ng-diasbled - disables a given control.
2. ng-show - show a given control.
3. ng-hide - hide a given control.
4. ng-click - represents a AngularJS click event.

ng-disabled DIRECTIVE
---------------------
Add ng-diabled attribute to a HTML button and pass it a model.
Bind the model to an checkbox and see the variation.

<input type="checkbox" ng-model = "enableDisableButton">Disable button
<button>Click Me!</button>

ng-show DIRECTIVE
-----------------

Add ng-show attribute to a HTML button and pass it to a model. Bind the model to an check-box and see the variation.

<input type="checkbox" ng-model ="showHideOne">Show Button
<button ng-show = "showHideOne">Click Me!</button>

ng-hide DIRECTIVE
-----------------
Add ng-hide directive to HTML button and pass it a model.Bind the model to a checkbox and see the variation.

<input type= "checkbox" ng-model ="showHideTwo">Hide Button
<button ng-hide ="showHidetwo">Click Me!</button>

ng-click DIRECTIVE
------------------

Add ng-click directive to a HTML button and update a model. Bind model to a HTML and see the variation.

<p> click: {{clickCounter}}</p>
<button ng-click = "clickCounter = clickCounter +1">Click Me!</button>


NOTE :- IF THERE IS NO CONTROLLER USED THEN DO NOT GIVE NAME TO "ng-app"



ANGULAR MODULES)
---------------)

Angular JS support modular approach. Modules are used to separate logics say service ,controllers , application etc.
We define modules in separate js files and name them as per the module.js file.


Eg:

Here we will create two modules.

Application Module - used to initiallize an application with controller(s)
Controller Module - used to define controller.


Application Module
------------------

mainApp.js

var mainApp = angular.module("mainApp",[])

/*
 We have passed an empty array to it.This array generally contains dependent module.
 
*/

Controller Module 
-----------------

mainApp.controller("studentController",function($scope){
	$scope.student = {
      firstName: "Mahesh",
      lastName: "Parashar",
      fees:500,
      
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'English',marks:75},
         {name:'Hindi',marks:67}
      ],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});

USE MODULE
------____
<div ng-app ="myApp" ng-controller ="studentController">
<script src = "mainApp.js"></script>
<script src = "studentController.js"></script>
</div>


Example:

<html>
   
   <head>
      <title>Angular JS Modules</title>
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
      <script src = "/angularjs/src/module/mainApp.js"></script>
      <script src = "/angularjs/src/module/studentController.js"></script>
      
      <style>
         table, th , td {
            border: 1px solid grey;
            border-collapse: collapse;
            padding: 5px;
         }
         
         table tr:nth-child(odd) {
            background-color: #f2f2f2;
         }
         
         table tr:nth-child(even) {
            background-color: #ffffff;
         }
      </style>
      
   </head>
   
   <body>
      <h2>AngularJS Sample Application</h2>
      <div ng-app = "mainApp" ng-controller = "studentController">
         
         <table border = "0">
            <tr>
               <td>Enter first name:</td>
               <td><input type = "text" ng-model = "student.firstName"></td>
            </tr>
         
            <tr>
               <td>Enter last name: </td>
               <td><input type = "text" ng-model = "student.lastName"></td>
            </tr>
         
            <tr>
               <td>Name: </td>
               <td>{{student.fullName()}}</td>
            </tr>
         
            <tr>
               <td>Subject:</td>
               <td>
               
                  <table>
                     <tr>
                        <th>Name</th>
                        <th>Marks</th>
                     </tr>
                  
                     <tr ng-repeat = "subject in student.subjects">
                        <td>{{ subject.name }}</td>
                        <td>{{ subject.marks }}</td>
                     </tr>
                  </table>
                  
               </td>
            </tr>
         </table>
         
      </div>
      
   </body>
</html>


AngularJS Forms -
------------------

AngularJS enriches from filing and validation. We can use ng-click to handle Angular-JS click on button
and use $dirty and $invalid flags to do the validation in seemless way.
Use nonvalidate with form declaration to disable any browser specific validation.
Forms controls makes heavy use of Angular events.Let's have quick look on event first.


Events
------

Angular JS provides multiple events which can be associated with the HTML controls.

For e.g = ng-click is normally associated with button.

Following are supported events in Angular JS.


. ng-click
. ng-dbl-click
. ng-mousedown
. ng-mouseup
. ng-mouseenter
. ng-mouseleave
. ng-mousemove
. ng-keydown
. ng-keyup
. ng-keypress
. ng-change


ng-click
________
--------
<input name = "firstname" type = "text" ng-model = "firstName" required>
<input name = "lastname" type = "text" ng-model = "lastName" required>
<input name = "email" type = "email" ng-model = "email" required>
<button ng-click = "reset()">Reset</button>

<script>
   function studentController($scope) { 
      $scope.reset = function(){
         $scope.firstName = "Mahesh";
         $scope.lastName = "Parashar";
         $scope.email = "MaheshParashar@tutorialspoint.com";
      }   
      
      $scope.reset();
   }
</script>
........

Reset data of a form using on-click directive of a button.


Validate data
-------------

Following can be used to tarck error.

$dirty - states that value has been changd.

$invalid - state that value enterd is invalid.

$error - states that exact error.

---------------------------------
Note 1:- The HTML <form> is used for creating a form for user input.
- A form can contain textfields, checkboxes , radio-buttons and more.
Forms are used to pass the user-data to specified url.

Note 2:- 
 <form action="/action_page.php">
  Username: <input type="text" name="usrname" required>
  <input type="submit">
</form> 

The required attribute is a boolean attribute.
When present , it specifies that an input field must be filled out before submitting the form

---------------------------------

AngularJS - Includes
--------------------

HTML does not support embedding html pages within html page.
To achieve this functionality following ways are used:-

Using Ajax:- Make a server call to get a corresponding html page and set it in innerHTML of html control.

Using Server Side Includes - JSP, PHP and other web side server technologies can include html page within 
							 dynamic page.
							 
************

Using Angular JS , we can embed HTML pages within a HTML page using ng-include directive.

<div ng-app = "" ng-controller = "studentcontroller">
<div ng-include ="'main.html'"></div>
<div ng-include ="'subjects.html'"></div>
</div>

************

Angular JS provides $https: control which works as a service to read data from server.
The server makes a database call to get the desired records.
AngularJS need data in JSON format.
Once the data is ready, $https: can be used to get the data from server in the following manner - 

function studentController($scope,$https:){
	
	var url = "data.txt";
	
	$https:get(url).sucess(function(response){
		
		$scope.students = response;
	});
}


Here, the file data.txt contains student records. $https: service makes an ajax call and set
response to its property students.
Students model can be used to draw tables in HTML.

data.txt
[
   {
      "Name" : "Mahesh Parashar",
      "RollNo" : 101,
      "Percentage" : "80%"
   },
	
   {
      "Name" : "Dinkar Kad",
      "RollNo" : 201,
      "Percentage" : "70%"
   },
	
   {
      "Name" : "Robert",
      "RollNo" : 191,
      "Percentage" : "75%"
   },
	
   {
      "Name" : "Julian Joe",
      "RollNo" : 111,
      "Percentage" : "77%"
   }
]


E.G:


<html>
   <head>
      <title>Angular JS Includes</title>
      
      <style>
         table, th , td {
            border: 1px solid grey;
            border-collapse: collapse;
            padding: 5px;
         }
         
         table tr:nth-child(odd) {
            background-color: #f2f2f2;
         }
         
         table tr:nth-child(even) {
            background-color: #ffffff;
         }
      </style>
      
   </head>
   <body>
      <h2>AngularJS Sample Application</h2>
      <div ng-app = "" ng-controller = "studentController">
      
         <table>
            <tr>
               <th>Name</th>
               <th>Roll No</th>
               <th>Percentage</th>
            </tr>
         
            <tr ng-repeat = "student in students">
               <td>{{ student.Name }}</td>
               <td>{{ student.RollNo }}</td>
               <td>{{ student.Percentage }}</td>
            </tr>
         </table>
      </div>
      
      <script>
         function studentController($scope,$http) {
            var url = "data.txt";

            $http.get(url).then( 
			
			        function(response) {
                       $scope.students = response.data;
					   }
			);
         }
      </script>
      
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
      
   </body>
</html>