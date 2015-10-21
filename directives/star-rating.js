// 3 types of directives: shared scope, inherited scope, and isolate scope
// will only go over shared scope and isolate scope since they are the most common
// isolate scope is similar to web components, ember components, and react components

// Shared scope example
// angular
//   .module('nike')
//   .directive('starRating1', function() {
//     return {
//       restrict: 'E',
//       templateUrl: '/templates/directives/star-rating.html',
//       link: function(scope) {
//         console.log(scope);
//
//         function calculateStars(rating) {
//           scope.stars = [];
//
//           for (var i = 1; i <= 5; i++) {
//             if (i <= rating) {
//               scope.stars.push({
//                 value: i,
//                 filled: true
//               });
//             } else {
//               scope.stars.push({
//                 value: i,
//                 empty: true
//               });
//             }
//           }
//         }
//
//         calculateStars(scope.vm.product.rating);
//
//         scope.rate = function(value) {
//           console.log('rating', value);
//           calculateStars(value);
//           scope.vm.product.rating = value;
//         };
//       }
//     };
//   });
// polutes the parent scope and could modify scopes higher up the chain
// can make refactoring difficult if a component knows too much
// think of it like a function that "knows too much"
// var myShoppingCart = [...];
// function calculateTotal() {
//   // calculate based on myShoppingCart
// }
// calculateTotal()
// // vs
//
// function calculateTotal(products) {
//   // calculate based on products
// }
// calculateTotal(myShoppingCart)
// // if you have a lot of functions depending on myShoppingCart, that would require
// // a lot of updates all over your code base

// potential for variable conflict with the scope above it
// tied to a product. what if you wanted to rate something else?

// isolate scoped bound to product.rating
// could use for things other than products
// angular
//   .module('nike')
//   .directive('starRating2', function() {
//     return {
//       restrict: 'E',
//       templateUrl: '/templates/directives/star-rating.html',
//       scope: {
//         rating: '='
//       },
//       link: function(scope) {
//         console.log(scope);
//         function calculateStars(rating) {
//           scope.stars = [];
//
//           for (var i = 1; i <= 5; i++) {
//             if (i <= rating) {
//               scope.stars.push({
//                 value: i,
//                 filled: true
//               });
//             } else {
//               scope.stars.push({
//                 value: i,
//                 empty: true
//               });
//             }
//           }
//         }
//
//         calculateStars(scope.rating);
//
//         scope.rate = function(value) {
//           console.log('rating', value);
//           scope.rating = value;
//           calculateStars(value);
//         };
//       }
//     };
//   });
// but what if you wanted to call a function when a star was clicked?




// passing in a function
// useful if you wanted to do an ajax call on click
// similar to web components, ember components, and react components
angular
  .module('nike')
  .directive('starRating3', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/star-rating.html',
      scope: {
        rating: '=',
        action: '&'
      },
      link: function(scope) {
        function calculateStars(rating) {
          scope.stars = [];

          for (var i = 1; i <= 5; i++) {
            if (i <= rating) {
              scope.stars.push({
                value: i,
                filled: true
              });
            } else {
              scope.stars.push({
                value: i,
                empty: true
              });
            }
          }
        }

        calculateStars(scope.rating);

        scope.rate = function(value) {
          // console.log('rating', value);
          calculateStars(value);
          scope.action({ rating: value });
        };
      }
    };
  });
