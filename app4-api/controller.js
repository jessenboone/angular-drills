angular.module('apiApp').controller('mainCtrl', function($scope, service) {


$scope.getPokemon = function() {
  service.getPokemon().then(function(response) {
    $scope.pokemon = response;
    });
  };
$scope.getPokemon();
});
