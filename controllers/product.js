angular
  .module('nike')
  .controller('ProductController', function(product) {
    var vm = this;
    vm.product = product;

    vm.save = function(product, rating) {
      console.log('saving with ajax...', product, rating);
      product.rating = rating;
    };
  });
