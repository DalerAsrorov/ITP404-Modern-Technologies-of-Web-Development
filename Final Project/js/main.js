angular
  .module('app', ['ngRoute','ngMaterial', 'ngMdIcons', 'ui.bootstrap',  'ngAnimate', 'ngAudio'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'MainCtrl'
      })
      .when('/clash/:genre', {
        templateUrl: '/templates/clash.html',
        controller: 'ClashCtrl',
        controllerAs: 'vm',
        resolve: {
          artists: function($route, $http, $location) {
            var genre = $route.current.pathParams.genre;
            var base = 'http://developer.echonest.com/api/v4/genre/artists?api_key=CHHHMSBTT8PT4XGSA&format=json&results=15&bucket=hotttnesss&name=';
            var url = base + genre + '&callback=JSON_CALLBACK';

            return $http.get(url).then(function(response){
              return response.data.response;
            }, function() {
              $location.path('/search');
            });
          },
          genre: function($route, $http, $location) {
            var genre = $route.current.pathParams.genre;
            return genre;
          },
          iTunes: function(iTunes) {
            return iTunes;
          },
          Spotify: function(Spotify) {
            return Spotify;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          },
          location: function($location) {
            return $location;
          },
          BandsInTown: function(BandsInTown) {
            return BandsInTown;
          }
        }
      })
      .when('/clash/:genre/artists', {
          templateUrl: '/templates/artists.html',
          controller: 'ArtistsCtrl',
          controllerAs: 'vm',
          resolve: {
            TopArtists: function(TopArtists) {
              return TopArtists;
            },
            Spotify: function(Spotify) {
              return Spotify;
            },
            genre: function($route, $http, $location) {
              return $route.current.pathParams;
            },
            Locator: function(Locator) {
              return Locator;
            }
          }
      })
      .when ('/clash/:genre/artists/:artist', {
        templateUrl: '/templates/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'vm',
        resolve: {
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          artist: function($route, $http, $location) {
            return $route.current.pathParams.artist;
          },
          iTunes: function(iTunes) {
            return iTunes;
          },
          Spotify: function(Spotify) {
            return Spotify;
          },
          ngAudio: function(ngAudio) {
            return ngAudio;
          },
          TopArtists: function(TopArtists) {
            return TopArtists;
          }
        }
      })
      .when('/clash/:genre/albums', {
        templateUrl: '/templates/albums.html',
        controller: 'AlbumsCtrl',
        controllerAs: 'vm',
        resolve: {
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          }
        }
      })


      // .when('/artists/:id', {
      //   templateUrl: '/templates/artist.html',
      //   controller: 'ArtistController',
      //   controllerAs: 'vm',
      //   resolve: {
      //     artist: function($route, $http, $location) {
      //       // return Artist.findRecord($route.current.params.id);
      //       var id = $route.current.params.id;
      //       var url = 'https://itp-api.herokuapp.com/artists/' + id;
      //       return $http.get(url).then(function(response) {
      //         return response.data.artist;
      //       }, function() {
      //         // redirect to /artists
      //         $location.path('/artists');
      //       });
      //     }
      //   }
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
