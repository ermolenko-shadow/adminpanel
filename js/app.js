var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

app.config( function ($routeProvider) { 
  $routeProvider 
	.when('/', { 
      
      templateUrl: 'views/order.html' ,
	  controller: 'HomeController' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
