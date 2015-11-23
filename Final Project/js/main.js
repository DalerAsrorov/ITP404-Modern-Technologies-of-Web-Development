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
      .when('/clash', {
        templateUrl: '/templates/clash.html',
        controller: 'ClashCtrl'
        // resolve: {
        //   artists: function(Artist) {
        //     return Artist.findAll();
        //   }
        // }
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
