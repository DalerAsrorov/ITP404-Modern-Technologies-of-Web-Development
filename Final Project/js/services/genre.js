angular
  .module('app')
  .factory('SearchGenre', function($http) {
    return {
      listAll: function (genreInput) {
        var url = 'http://api.rhapsody.com/v1/genres?apikey=FF3m3Ux0fES32FFvc08QMY1xRH6XGOgn&callback=JSON_CALLBACK';
        var arrayOfGenres = [];

        return $http({
            method: 'GET',
            url: url
          }).then(function (response) {
              return response.data;
            }, function errorCallback(response) {
              console.log("Error loading artists from spotify: " + response);
          });
      },
      listArtists: function(genreId) {
        var url = 'http://api.rhapsody.com/v1/genres/' + genreId + '/albums/top?apikey=FF3m3Ux0fES32FFvc08QMY1xRH6XGOgn&callback=JSON_CALLBACK';

        return $http({
            method: 'GET',
            url: url
          }).then(function (response) {
              return response.data;
            }, function errorCallback(response) {
              console.log("Error loading artists from spotify: " + response);
          });
      }
    }
  });
