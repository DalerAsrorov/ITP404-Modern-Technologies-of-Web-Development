angular
  .module('itunes')
  .directive('itunesAlbum', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/albums.html',
      // isolate scope
      scope: {
        // rating: '=',
        // action: '&'
        click: '&',
        album: '='
      },
      link: function(scope) {
        console.log("Here");
        function calculateStars(rating) {
          scope.stars = [];
          scope.stampImgSrc = '../img/explicit-stamp.png';

          for (var i = 1; i <= 5; i++) {
            if (i <= rating) { // filled star
              scope.stars.push({
                value: i,
                filled: true
              });
            } else { // empty star
              scope.stars.push({
                value: i,
                empty: true
              });
            }
          }

          console.log(scope.stars);
        }

        calculateStars(scope.rating);

        scope.rate = function(value) {
          console.log(value);
          calculateStars(value);
          scope.rating = value;
          scope.action();
        };
      }
    };
  });
