Angular JS provides developers options to wtite client side application.
It uses JavaScript in a clean MVC(Model View Controller) way.
Angular JS is cross-browser compliant.
Angular JS automtaically handles Javascript code suitable for each browser.

Core Features:

Data-binding : It is the automatic synchronization of data between model and view components.
Scope : These are objects that refre to the model.They act as a glue between controller and view.
Controller : These are Javascript functions that are bound to a particular scope.
Services − AngularJS come with several built-in services for example $https: to make a XMLHttpRequests. These are singleton objects which are instantiated only once in app.

Filters − These select a subset of items from an array and returns a new array.

Directives − Directives are markers on DOM elements (such as elements, attributes, css, and more). 
             These can be used to create custom HTML tags that serve as new, custom widgets. 
			 AngularJS has built-in directives (ngBind, ngModel...)

Templates − These are the rendered view with information from the controller and model. These can be a single file (like index.html) or multiple views in one page using "partials".

Routing − It is concept of switching views.

Model View Whatever − MVC is a design pattern for dividing an application into different parts (called Model, View and Controller), each with distinct responsibilities. AngularJS does not implement MVC in the traditional sense, but rather something closer to MVVM (Model-View-ViewModel). The Angular JS team refers it humorously as Model View Whatever.

Deep Linking − Deep linking allows you to encode the state of application in the URL so that it can be bookmarked. The application can then be restored from the URL to the same state.

Dependency Injection − AngularJS has a built-in dependency injection subsystem that helps the developer by making the application easier to develop, understand, and test.

Angular JS framework can be divided into following three major parts:-
-----------------------------------------------------------------------
ng-app -> This directive defines and links an AngularJS application to HTML.
ng-model->This directive binds the values of Angular-JS application data to HTML input controls.
ng-bind->This directive binds  the AngularJS Application to HTML tags.

Eg.

<!doctype html>
<html>
   
   <head>
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular.min.js"></script>
   </head>
   
   <body ng-app = "myapp">
      
      <div ng-controller = "HelloController" >
         <h2>Welcome {{helloTo.title}} to the world of Web!</h2>
      </div>
      
      <script>
         angular.module("myapp", [])
         
         .controller("HelloController", function($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
         });
      </script>
      
   </body>
</html>


Point to AngularJS app.
-------------------____

We can identify what part of HTML contains th AngularJS app.This is done by adding the ng-app attribute to
the root HTML element of the AngularJS app.You can either add it to html element , body elemnt ..etc as shown below.

<body ng-app ="myapp">



View 
----

The view is this part-

<div ng-controller = "HelloController">
<h2> Welcome {{helloTo.title}} to the world of Tutorialspoint!</h2>
</div>

/*
The ng-controller tells the AngularJS what controller to use with this view.
helloTo.title tells AngularJS to write the "model" value named helloTo.title to the HTML at this location.
*/


Controller
-----------

The Controller part is.

<script>
angular.module("myapp", [])

.controller("HelloController",function($scope){
	$scope.helloTO = {};
	$scope.helloTO.title = "Angular JS"
	
}
);

</script>

/*
1.The code registers a cntroller function named HelloController in the angular module named myapp.
2.The controller function is registred in angular via the angular.module(<MODULE_NAME,.....>).controller(<CONTROLLER_NAME>,<FUNCTION>) function call.
3.The $scope parameter passed to the controller function is the "model".
4 The Controller function adds a "helloTO" JavaScript object, and in that object it adds a title field.
*/


STEPS HAPPEN WHEN PAGE IS LOADED IN BROWSER
-------------------------------------------
1. HTML document is loaded into the browser, and evaluated by the browser.
2. AngularJS JavaScript file is loaded.
3. The Angular object is created.
4. The Javascript which registers controller function is executed.
5. AngularJS Scans through the HTML to look for Angular-JS apps and views.
6. Once view is located , it connects the view to the corresponding controller function.
 7.	Next,AngularJS executes the controller functions. If then renders the view with 
    data from the model populated by the controller.The page is now ready.

MVC
---

Model - It is the lowest level of pattern responsible for maintaining data.
View - It is responsible for displaying all or portion of the data to the user.
COntroller - It is the software code that controls the interactions between the Model and View.

MVC is popular becuase it isolates the application logic from the user interface layer and supports 
separation of concerns.The controller receives all requests for the application and then works with the model
to avail data needed by the view. The view then uses the data prepared by the controller to generate a final 
persentable response.

The Model -:

The model is responsible for managing application data. It responds to the request from
view and to the instructions from controller to update itself.

The View -: 

A presentation of data in a particular format, triggered by the controller's decision to present the data.
They are script-based template system such as JSP,ASP,PHP and very easy to integrate with AJAX technology.

The Controller :-

Controlller respond to the user input and perform intercations on the data model objects.
The controller receives input and validate it and then performs business operations and modify the state of the model
.

Example:

<html>
   
   <head>
      <title>AngularJS First Application</title>
   </head>
   
   <body>
      <h1>Sample Application</h1>
      
      <div ng-app = "">
         <p>Enter your Name: <input type = "text" ng-model = "name"></p>
         <p>Hello <span ng-bind = "name"></span>!</p>
      </div>
      
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
      
   </body>
</html>

How Angular JS integrates with HTML?


/*
1 . ng- app directive indicates  the start of AngularJS application.
2 . ng-model directive then creates a model variable named "name" which can be used with html page
    and within the div having ng-app directive
3 . ng-bind then used the name model to be displayed in the html span tag whenever user input 
    something in the text box.
.4. Closing </div> tag indicates the end of AngularJS application.	
*/

>>>ng-app − This directive starts an AngularJS Application.

<div ng-app = "">
   ...
</div>

>>>ng-init - This directive initializes an AngularJS application data . It is used to put
          values to the variable to be used in the application
		  . eg:- <div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]"></div>
	
>>>ng-model − This directive binds the values of AngularJS application data to HTML input controls.

<div ng-app = "">
   ...
   <p>Enter your Name: <input type = "text" ng-model = "name"></p>
</div>

>>>ng-repeat - This directive repeats Html elemnet for each item in collection.
In following example , we have itertaed over array of countries.

<div ng-app = "">
   ...
   <p>List of Countries with locale:</p>
   
   <ol>
      <li ng-repeat = "country in countries">
         {{ 'Country: ' + country.name + ', Locale: ' + country.locale }}
      </li>
   </ol>
   
</div>
/************************************************************/
eg:

<html>
   
   <head>
      <title>AngularJS Directives</title>
   </head>
   
   <body>
      <h1>Sample Application</h1>
      
      <div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]"> 
         <p>Enter your Name: <input type = "text" ng-model = "name"></p>
         <p>Hello <span ng-bind = "name"></span>!</p>
         <p>List of Countries with locale:</p>
      
         <ol>
            <li ng-repeat = "country in countries">
               {{ 'Country: ' + country.name + ', Locale: ' + country.locale }}
            </li>
         </ol>
      </div>
      
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
      
   </body>
</html>	

/*******************************************************/


Angular JS Expression:
----------------------

 Expression are used to bind application data to html.
 Expression are written inside double braces like {{expression}} . 
 Expression behaves in same way as ng-bind directives.
 Angular JS application expression are pure JS expressions and outputs the data where they are used.

 
 E.G:
 
 <html>
   
   <head>
      <title>AngularJS Expressions</title>
   </head>
   
   <body>
      <h1>Sample Application</h1>
      
      <div ng-app = "" ng-init = "quantity = 1;cost = 30; student = {firstname:'Mahesh',lastname:'Parashar',rollno:101};marks = [80,90,75,73,60]">
         <p>Hello {{student.firstname + " " + student.lastname}}!</p>
         <p>Expense on Books : {{cost * quantity}} Rs</p>
         <p>Roll No: {{student.rollno}}</p>
         <p>Marks(Math): {{marks[3]}}</p>
      </div>
      
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
      
   </body>
</html>

Angular JS Controllers:
-----------------------

--Angular JS application mainly relies on controllers to control flow of data in the application.
--A controller is defined using ng-controller directive.
--A "controller is a javascript object" containing attributes/properties and functions.
--Each controller accepts $scope as a parameter which refres to the application/module that controller is to control.


<div ng-app = "" ng-controller ="studentController">
...
</div>

Here we've declared a controller studentController using ng-controller directive.
As a next step we'll define the studentController as follows

<script>
function studentController($scope){
	$scope.student = {
		firstName : "Mahesh",
		lastName : "Parashar",
	fullname:function(){
		var studentObject;
		studentObject = $scope.student;
		return studentObject.firstName + " " +studentObject.lastName;
		
	}
 };
}
</script>

 .- studentController defines as a Javascript object with $scope as argument.
 .- $scope refres to the application which is to use the studentController object.
 .- $scope.student is property of studentController object.
 .- firstName and lastName are two properties of $scope.student object.We have passed default values to them.
 .- fullName is the function of $scope.student object whose task is to return the combined name.
 .- as a note , we can also define the controller object in separtae JS file and refer that file in
    html page.
	
E.G
	
<html>
   
   <head>
      <title>Angular JS Controller</title>
      <script src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
   </head>
   
   <body>
      <h2>AngularJS Sample Application</h2>
      
      <div ng-app = "mainApp" ng-controller = "studentController">
         Enter first name: <input type = "text" ng-model = "student.firstName"><br><br>
         Enter last name: <input type = "text" ng-model = "student.lastName"><br>
         <br>
         
         You are entering: {{student.fullName()}}
      </div>
      
      <script>
         var mainApp = angular.module("mainApp", []);
         
         mainApp.controller('studentController', function($scope) {
            $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });
      </script>
      
   </body>
</html>


Angular JS Filters
------------------

. Filters are used to change modify the data and can be clubbed in expression or directive using pipe charcater.
. Following is the list commonly used filters.

1. uppercase - Converts the text to upper text. => Name in Upper Case: {{student.fullName() | uppercase}}
2. lowercase - Converts the text to lower text. => Name in Lower Case: {{student.fullName() | lowercase}}
3. currency - formats text into currency format => fees: {{student.fees | currency}}
4. filter -  filter the array to a subset of it based on provided criteria
  
   To display only required subjects, we've used subjectName as filter.
   
   Enter subject: <input type = "text" ng-model = "subjectName">
	Subject:
	<ul>
	<li ng-repeat = "subject in student.subjects | filter: subjectName">
		{{ subject.name + ', marks:' + subject.marks }}
	</li>
	</ul>

5. orderby - orders the array based on provided criteria.

-- To order subject by marks, we have used orderBy marks.

Subject:

<ul>
 <li ng-repeat = "subject in student.subjetcs | orderBy: 'marks'">
 {{subject.name + ', marks:' + subject.marks}}
 </li>
<ul>
 
 

