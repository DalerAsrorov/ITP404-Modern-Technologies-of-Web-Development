angular
  .module('app')
  .controller('ArtistCtrl', function(artist) {
    vm = this;
    vm.artistName = artist;

    console.log(artist);
  });
