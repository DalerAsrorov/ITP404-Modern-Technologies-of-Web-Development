angular
  .module('itunes')
  .factory('Artist', function($http) {
    return {
      findAll: function() {
        return $http.get('https://itp-api.herokuapp.com/artists').then(function(response) {
          return response.data.artists;
        });
      }
    }
  });
