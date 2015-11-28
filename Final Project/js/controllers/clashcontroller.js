angular
  .module('app')
  .controller('ClashCtrl', function(artists, genre, iTunes, Spotify, SearchGenre, $location, BandsInTown) {
      var vm = this;
      var name = "";
      vm.genre = genre;
      vm.topArtists = artists.artists;
      vm.topAlbums;
      vm.topSongs;
      vm.loading = true;

      vm.topArtists.forEach(function(selectedArtist) {
        Spotify.search(selectedArtist.name).then(function(artist) {
          vm.artist = artist;
          vm.addArtistsSlide(vm.artist.items[0].images[0].url, vm.artist.items[0].name);
          vm.loading = false;
        });
      });

     SearchGenre.listAll(vm.genre).then(function(listOfGenres) {
       listOfGenres.forEach(function(genre) {
         if(genre.name.toLowerCase().indexOf(vm.genre.toLowerCase()) > -1 ) {
            SearchGenre.listArtists(genre.id).then(function(topAlbumsList) {
                vm.topAlbums = topAlbumsList;
                vm.topAlbums.forEach(function(album) {
                  vm.addAlbumsSlide (album.images[0].url, album.artist.name, album.name);
                });
            });
            SearchGenre.listSongs(genre.id).then(function(topSongsList) {
              vm.topSongs = topSongsList.data;
              vm.topSongs.forEach(function(song) {
                  Spotify.search(song.artist.name).then(function(artist) {
                      var imageURL = "";
                      console.log(song.artist.name);
                      if(artist.items[0] == undefined) {
                          imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                      } else if(artist.items[0].images[0] == undefined) {
                        imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                      } else {
                        imageURL = artist.items[0].images[0].url;
                      }
                      vm.addSongSlides(imageURL, song.artist.name, song.name);
                  });
              });
            });
         }
       });
     });

     vm.hover = false;
     vm.hoverIn = function() {
       vm.hover = true;
     }
     vm.hoverOut = function() {
       vm.hover = false;
     }


     //location for BandsInTownAPI
     var pos = {};

     if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
         var pos = {
           lat: position.coords.latitude,
           lng: position.coords.longitude
         };
          var bands = BandsInTown.findConcert("Justin Bieber", pos);
          console.log(bands);

       });
     }

      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      var artistSlides = vm.artistsSlides = [];

      // add slide that contains the image and
      // name of the artist taken from API
      // call via Spotify service
      vm.addArtistsSlide = function(image, artistName) {
        artistSlides.push({
          image: image,
          name: artistName
        });
      };

      var albumSlides = vm.albumSlides = [];
      vm.addAlbumsSlide = function(image, artistName, albumName) {
        albumSlides.push({
          image: image,
          name: artistName,
          album: albumName
        });
      }

      var songSlides = vm.songSlides = [];
      vm.addSongSlides = function(image, artistName, songName) {
        songSlides.push({
          image: image,
          name: artistName,
          song: songName
        });
      }

  });
