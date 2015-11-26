angular
  .module('app')
  .factory('Spotify', function($http) {
    return {
      search: function(artist) {
        var url = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist' + '&callback=JSON_CALLBACK';
        console.log(url);
        return $http({
            method: 'GET',
            url: url
          }).then(function successCallback(response) {
              console.log(response.data.artists);
              return response.data.artists;
            }, function errorCallback(response) {
              console.log("Error loading artists from spotify: " + response);
          });
      }
    };
  });
