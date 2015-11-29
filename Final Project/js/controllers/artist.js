angular
  .module('app')
  .controller('ArtistCtrl', function(artist, iTunes, Spotify, ngAudio) {
    vm = this;
    vm.artistName = artist;
    vm.arrayOfSongs = [];
    vm.artistImageURL;
    vm.noVideos = false;
    vm.songsCollection = [];
    vm.sound = [];

    Spotify.search(vm.artistName).then(function(artist) {
      vm.artist = artist;
      vm.artistImageURL = vm.artist.items[0].images[0].url;
      //console.log(vm.artistImageURL);
    });

    iTunes.search(vm.artistName).then(function(response) {
      vm.arrayOfSongs = response;
      vm.arrayOfSongs.forEach(function(element) {
        vm.songsCollection.push(element.previewUrl);
      });

      vm.songsCollection.forEach(function(song) {
        vm.sound.push( ngAudio.load(song));
      });

      console.log(vm.sound);

    });


    iTunes.getAlbums(vm.artistName).then(function(response){
      //console.log(response);
    });

    vm.example = "http://a894.phobos.apple.com/us/r30/Music/v4/99/50/68/99506859-ae4e-c907-fda8-72bd53287559/mzaf_3309707875668504896.aac.m4a";

    iTunes.getVideos(vm.artistName).then(function(response){
      if(response.length !== 0 && response !== 'undefined' && response !== null) {

      } else {
        vm.noVideos = true;
      }
    })


  });
