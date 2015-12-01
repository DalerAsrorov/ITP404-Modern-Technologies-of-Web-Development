angular
  .module('app')
  .controller('EventsCtrl', function(genre, BandsInTown) {
    var vm = this;
    vm.genre = genre;

  });
