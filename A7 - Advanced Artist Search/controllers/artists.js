angular
  .module('itunes')
  .controller('ArtistsController', function(artists) {
    var vm = this;
    vm.artists = artists;
  });
