// angular
//   .module('app', ['ngRoute', 'ngMaterial', 'ngMdIcons'])
//   .config(function($routeProvider) {
//     $routeProvider
//       .when('/login', {
//         templateUrl: 'index.html',
//         controller: 'MainCtrl'
//       })
//       .when('/main/:userId', {
//         templateUrl: '/templates/user.html',
//         controller: 'UserCtrl'
//         // resolve: {
//         //   albums: function($route, $http, $location) {
//         //     var routeId = $route.current.pathParams.artistId;
//         //     var url = 'https://itunes.apple.com/lookup?id=' + routeId + '&entity=album' + '&callback=JSON_CALLBACK';
//         //     return $http.jsonp(url).then(function(response) {
//         //       return response.data.results;
//         //     }, function() {
//         //       $location.path('/search');
//         //     });
//         //   }
//         // }
//       })
//       .otherwise({
//         redirectTo: '/login'
//       });
//   });
angular
  .module('app', ['ngRoute','ngMaterial', 'ngMdIcons', 'ui.bootstrap'])
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
            console.log(genre);
            var base = 'http://developer.echonest.com/api/v4/genre/artists?api_key=CHHHMSBTT8PT4XGSA&format=json&results=15&bucket=hotttnesss&name=';
            var url = base + genre + '&callback=JSON_CALLBACK';

            return $http.get(url).then(function(response){
              return response.data.response;
            }, function() {
              $location.path('/search');
            });
          },
          iTunes: function(iTunes) {
            return iTunes;
          },
          Spotify: function(Spotify) {
            return Spotify;
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
