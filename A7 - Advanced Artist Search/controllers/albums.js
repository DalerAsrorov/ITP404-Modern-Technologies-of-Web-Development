angular
  .module('itunes')
  .controller('AlbumController', function(albums) {
      var vm = this;
      vm.albums = albums;
      vm.favorites = [];
      vm.alreadyFavoritedNotice = false;

      vm.goBack = function() {
            $location.path('/search');
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

            //storing the album in the local storage...
            localStorage.setItem(album.collectionId, jsonString);
        }
      }
  });
