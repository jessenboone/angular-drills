angular.module('arrayApp').controller('arrayController', function(service, $scope) {


$scope.getData = function() {
$scope.employees = service.getData();
}
$scope.getData();

})
