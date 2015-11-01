angular
  .module('itunes')
  .controller('AlbumController', function(albums) {
      var vm = this;
      vm.albums = albums;
      vm.stampImgSrc = "img/explicit-stamp.png";

      vm.goBack = function() {
          $location.path('/search');
      }
  });
