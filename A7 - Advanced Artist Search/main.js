angular
  .module('itunes', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: '/templates/index.html',
        controller: 'SongsSearchController',
        controllerAs: 'vm'
      })
      .when('/artists/:artistId', {
        templateUrl: '/templates/album.html',
        controller: 'AlbumController',
        controllerAs: 'vm',
        resolve: {
          albums: function($route, $http, $location) {
            var routeId = $route.current.pathParams.artistId;
            var url = 'https://itunes.apple.com/lookup?id=' + routeId + '&entity=album' + '&callback=JSON_CALLBACK';
            return $http.jsonp(url).then(function(response) {
              return response.data.results;
            }, function() {
              $location.path('/search');
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/search'
      });
  });
