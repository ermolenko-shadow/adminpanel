app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $scope.message = "HomeController";

  $http.get("https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json")
    .then(function(response) {
        $scope.orders = response.data;
    });

}]);
