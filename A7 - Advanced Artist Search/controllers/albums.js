angular
  .module('itunes')
  .controller('AlbumController', function(albums) {
      var vm = this;
      vm.albums = albums;
      vm.favorites = [];
      vm.alreadyFavoritedNotice = false;

      // getting data back from local storage
      // to store the favorites list
      // with previously favorited songs (experimental thing...)
      for(var i=0, len=localStorage.length; i<len; i++) {
          var key = localStorage.key(i);
          var value = JSON.parse(localStorage[key]);
          vm.favorites.push(value);
      }

      vm.goBack = function() {
          $location.path('/search');
      }

      vm.clearFavoriteList = function() {
        localStorage.clear();
        vm.favorites = [];

      }

      vm.favorite = function(album) {
        if (album.favorited === true){
            vm.alreadyFavoritedNotice = true;
        }
        else {
          vm.alreadyFavoritedNotice = false;
          vm.favorites.push(album);
          album.favorited = true;
          var jsonString = JSON.stringify(album);

          // **** storing the album in the local storage...
          localStorage.setItem(album.collectionId, jsonString);
        }
      }
  });
