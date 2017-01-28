app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  $scope.message = "HomeController";

  $http.get("http://worker.16mb.com/api/get_all_order.php")
    .then(function(response) {
        $scope.orders = response.data;
    });

}]);
