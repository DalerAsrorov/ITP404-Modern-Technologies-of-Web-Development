angular
  .module('orders-app')
  .factory('orders', function($http, $q) {
    return {
      findAll: function() {
        return $http.get('https://some-shopping-site.com/orders').then(function(response) {
          return response.data.orders;
        });
      },
      getTotalSpent: function() {
        // get all the orders
        var orderPromise = this.findAll();

        return $q.all([orderPromise]).then(function(responses) {
          var orders = responses[0];
          var total = 0;

          // loop through the orders array
          // and get the total of sum of all
          // the orders' total values.
          for (var i = 0; i < orders.length; i++) {
            total += orders[i].total;
          }

          return total;
        });
      }
    };
  });
