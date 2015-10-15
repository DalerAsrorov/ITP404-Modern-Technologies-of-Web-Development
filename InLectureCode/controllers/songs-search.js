angular
  .module('itunes')
  .controller('SongsSearchController', function(iTunes) {
    var vm = this;

    vm.favorites = [];
    vm.previousSearches = [];

    vm.search = function() {
      console.log('searching...', vm.artistSearch);
      vm.loading = true;

      vm.previousSearches.push(vm.artistSearch);

      iTunes.search(vm.artistSearch).then(function(songs) {
        vm.songs = songs;
        vm.loading = false;
        vm.artistSearch = '';
      });
    };

    vm.favoriteSong = function(song) {
      vm.favorites.push(song);
      song.favorited = true;
    };
  });