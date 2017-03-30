angular.module('app3').controller('mainCtrl', function($scope, service) {

$scope.test = 'app works';

$scope.myData = function() {
  $scope.people = service.myData();
};

$scope.myData();

});
