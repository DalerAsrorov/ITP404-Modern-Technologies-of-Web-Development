angular
  .module('itunes')
  .controller('SongsSearchController', function(iTunes, $location) {
    var vm = this;

    vm.showCaption = true;
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
  });
