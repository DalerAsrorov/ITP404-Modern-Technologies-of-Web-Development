angular
  .module('app')
  .controller('SongsCtrl', function(genreId, genre, SearchGenre, Spotify, ngAudio) {
    var vm = this;
    vm.genre = genre;
    vm.genreId = genreId;

    SearchGenre.listSongs(vm.genreId).then(function(topSongsList) {
      vm.topSongs = topSongsList.data;
      vm.topSongs.forEach(function(song) {
          Spotify.search(song.artist.name).then(function(artist) {
              var imageURL = "";

              if(artist.items[0] === undefined) {
                  imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
              } else if(artist.items[0].images[0] == undefined) {
                imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
              } else {
                imageURL = artist.items[0].images[0].url;
              }

              console.log(song);
              //vm.addSongSlides(imageURL, song.artist.name, song.name);
          });
      });
    });


  });
