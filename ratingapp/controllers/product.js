angular
  .module('nike')
  .controller('ProductController', function(product) {
    var vm = this;
    vm.product = product;
  });
