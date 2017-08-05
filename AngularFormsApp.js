
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService) {

        $scope.showCreateEmployeeForm = function () {
            //$location.path('/newEmployeeForm');

            $modal.open({
                templateUrl: 'EmployeeForm/efTemplate.html', 
                controller: 'efController',
			resolve : {
				perId : function () {
					return 0;
					}				
				} 
            });

        };

        $scope.showUpdateEmployeeForm = function (id) {
		
		var perId = id;
		console.log(perId);
		$modal.open({
			templateUrl : 'EmployeeForm/efTemplate.html',
			controller : 'efController',
			resolve : {
				perId : function () {
					return perId;
					}				
				}
		});
            //$location.path('/updateEmployeeForm/' + id)
        };

    });