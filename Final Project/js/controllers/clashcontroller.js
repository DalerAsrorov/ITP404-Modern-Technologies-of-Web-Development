angular
  .module('app')
  .controller('ClashCtrl', function(artists, iTunes, Spotify) {
      var vm = this;
      var name = "";
      vm.topArtists = artists.artists;
      vm.loading = true;

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

      // add slide that contains the image and
      // name of the artist taken from API
      // call via Spotify service
      vm.addSlide = function(image, artistName) {
      //  var newWidth = 600 + slides.length + 1;
        slides.push({
          image: image,
          name: artistName
        });
      };


  });
