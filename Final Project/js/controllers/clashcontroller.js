angular
  .module('app')
  .controller('ClashCtrl', function(artists, iTunes, Spotify) {
      var vm = this;
      vm.topArtists = artists.artists;
      vm.loading = true;
    //  console.log(vm.topArtists);

      vm.topArtists.forEach(function(selectedArtist) {
        Spotify.search(selectedArtist.name).then(function(artist) {
          vm.artist = artist;
          vm.addSlide(vm.artist.items[0].images[0].url, vm.artist.items[0].name);
          vm.loading = false;
        });
      });

      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      var slides = vm.slides = [];
      vm.addSlide = function(image, artistName) {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: image,
          name: artistName
        });
      };
      // for (var i = 0; i < vm.topArtists.length; i++) {
      //   console.log(vm.artist[i]);
      //   //console.log( vm.artist[i]);
      // //  vm.addSlide(vm.artist[i].items[0].images[0].url, vm.artist[i].items[0].name);
      // }
  });
