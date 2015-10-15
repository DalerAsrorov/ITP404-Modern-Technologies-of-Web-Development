angular
  .module('itunes', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'SongsSearchController',
        controllerAs: 'vm'
      })
      .when('/artists', {
        templateUrl: '/templates/artists.html',
        controller: 'ArtistsController',
        controllerAs: 'vm',
        resolve: {
          artists: function(Artist) {
            return Artist.findAll();
          }
        }
      })
      .when('/artists/:id', {
        templateUrl: '/templates/artist.html',
        controller: 'ArtistController',
        controllerAs: 'vm',
        resolve: {
          artist: function($route, $http, $location) {
            // return Artist.findRecord($route.current.params.id);
            var id = $route.current.params.id;
            var url = 'https://itp-api.herokuapp.com/artists/' + id;
            return $http.get(url).then(function(response) {
              return response.data.artist;
            }, function() {
              // redirect to /artists
              $location.path('/artists');
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });