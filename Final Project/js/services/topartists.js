angular
  .module('app')
  .factory('TopArtists', function($http) {
    return {
      getArtists: function(genre) {
        var base = 'http://developer.echonest.com/api/v4/genre/artists?api_key=CHHHMSBTT8PT4XGSA&format=json&results=15&bucket=hotttnesss&name=';
        var url = base + genre + '&callback=JSON_CALLBACK';
        return $http.get(url).then(function(response){
          return response.data.response.artists;
        });
      }
    };
  });
