angular.module("myApp", ["progressBar"])
  .controller("main", ['$scope', function($scope, progressBar) {
    $scope.loaderValue = 10
    $scope.items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  }]);
