angular.module('apiApp').service('service', function($http) {

var baseUrl = 'http://pokeapi.co/api/v2/'

this.getPokemon = function() {
  return $http.get(baseUrl + 'pokemon').then(function(response) {
    console.log(response.data);
    return response.data.results;
  });
}

});
