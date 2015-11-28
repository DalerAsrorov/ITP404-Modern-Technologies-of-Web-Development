angular
  .module('app')
  .controller('ClashCtrl', function(artists, genre, iTunes, Spotify, SearchGenre, $location, BandsInTown) {
      var vm = this;
      var name = "";
      vm.genre = genre;
      vm.topArtists = artists.artists;
      vm.topAlbums;
      vm.topSongs;
      vm.events;
      vm.loading = true;

      vm.topArtists.forEach(function(selectedArtist) {
        Spotify.search(selectedArtist.name).then(function(artist) {
          vm.artist = artist;
          vm.addArtistsSlide(vm.artist.items[0].images[0].url, vm.artist.items[0].name);
          vm.loading = false;
        });
      });

     SearchGenre.listAll(vm.genre).then(function(listOfGenres) {
       console.log(listOfGenres);
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
                      vm.addEvents(song.artist.name);

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


     var artistImageForEvent = "";
      vm.addEvents = function(artist) {
         if(navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
             var pos = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
             };
              var bands = BandsInTown.findConcert(artist, pos);
              bands.then(function(response){
                //console.log(response);
                if(response.length !== 0 && response !==null && response !== 'undefined') {
                  response.forEach(function(artist) {
                      artist.artists.forEach(function(oneArtist) {
                        Spotify.search(oneArtist.name).then(function(element) {
                          if(element.items[0] == undefined) {
                              artistImageForEvent = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                          } else if(element.items[0].images[0] == undefined) {
                            artistImageForEvent = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                          } else {
                            artistImageForEvent = element.items[0].images[0].url;
                          }
                          //console.log(artist.venue.name + ", " + artist.venue.region);
                          //console.log(artist.venue.region);
                          console.log(artistImageForEvent);
                          vm.addEventSlides(artistImageForEvent, element.items[0].name, artist.venue.name, artist.venue.region);
                        });
                      })
                  })
                }
              })
           });
         }
      }

     vm.hover = false;
     vm.hoverIn = function() {
       vm.hover = true;
     }
     vm.hoverOut = function() {
       vm.hover = false;
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

      var eventSlides = vm.eventSlides = [];
      vm.addEventSlides = function(image, artistName, venueName, state) {
        eventSlides.push({
          image: image,
          name: artistName,
          venueName: venueName,
          state: state
        });
      }

  });
