angular
  .module('itunes')
  .controller('SongsSearchController', function(iTunes, $location) {
    var vm = this;

    //adding favorites
    vm.showCaption = true;
    vm.favorites = [];
    vm.previousSearches = [];


    vm.search = function() {
      console.log('searching...', vm.artistSearch);
      vm.showCaption = false;
      vm.loading = true;
      vm.previousSearches.push(vm.artistSearch);

      iTunes.search(vm.artistSearch).then(function(artist) {
        vm.artist = artist;
        vm.loading = false;
        vm.artistSearch = '';
        $location.path('/artists/' + artist[0].artistId);
      });
    };

    vm.favoriteSong = function(song) {
      vm.favorites.push(song);
      song.favorited = true;
    };
  });
