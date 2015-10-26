angular
  .module('nike', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/products/3', {
        templateUrl: '/templates/products.html',
        controller: 'ProductController',
        controllerAs: 'vm',
        resolve: {
          product: function() {
            return {
              id: 3,
              name: 'NIKE SB ERIC KOSTON 2 MAX',
              price: 89.97,
              rating: 4
            };
          }
        }
      });
    });
