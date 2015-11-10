// var app = angular.module('app', ['ngMaterial']);

// app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
//   $scope.toggleSidenav = function(menuId) {
//     $mdSidenav(menuId).toggle();
//   };

// }]);
angular
  .module('app', ['ngRoute', 'ngMaterial'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/workspace', {
        templateUrl: '/templates/index.html',
        controller: 'MainCtrl',
      })
      .when('/workspace/:userId', {
        templateUrl: '/templates/user.html',
        controller: 'UserCtrl'
        // resolve: {
        //   albums: function($route, $http, $location) {
        //     var routeId = $route.current.pathParams.artistId;
        //     var url = 'https://itunes.apple.com/lookup?id=' + routeId + '&entity=album' + '&callback=JSON_CALLBACK';
        //     return $http.jsonp(url).then(function(response) {
        //       return response.data.results;
        //     }, function() {
        //       $location.path('/search');
        //     });
        //   }
        // }
      })
      .otherwise({
        redirectTo: '/workspace'
      });
  });
