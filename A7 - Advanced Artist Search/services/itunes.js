angular
  .module('itunes')
  .factory('iTunes', function($http) {
    return {
      search: function(artist) {
        var url = 'https://itunes.apple.com/search?term='+ artist +'&callback=JSON_CALLBACK';
        return $http.jsonp(url).then(function(response) {
           return response.data.results;
        });
      }
    };
  });
