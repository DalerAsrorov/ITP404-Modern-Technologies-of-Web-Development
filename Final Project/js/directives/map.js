angular
  .module('app')
  .directive('map', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/map.html',
      // isolate scope
      scope: {
        click: '&',
        album: '='
      },
      link: function(scope) {
        scope.stampImgSrc = '../img/explicit-stamp.png';

        scope.addToFavorite = function() {
          scope.click();
        };
      }
    };
  });
