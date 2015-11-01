angular
  .module('itunes')
  .directive('itunesAlbum', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/albums.html',
      // isolate scope
      scope: {
        click: '&',
        album: '='
      },
      link: function(scope) {
        scope.stars = [];
        scope.stampImgSrc = '../img/explicit-stamp.png';

        scope.addToFavorite = function() {
          scope.click();
        };
        scope.delete
      }
    };
  });
