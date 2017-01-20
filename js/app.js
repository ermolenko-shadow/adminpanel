var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) { 
 
 
  
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/order.html',
      controller: 'HomeController' 
    }) 
    .when('/worker', { 
      templateUrl: 'views/worker.html',
      controller: 'WorkerController' 
    }); 

}]);
