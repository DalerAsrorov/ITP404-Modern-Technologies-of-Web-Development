angular
  .module('music', ['ngRoute'])
  .controller('MusicController', function($scope, $log, Artist, Song){

  $scope.noSongsMessage = "Plesae select an artist."  
  $scope.promise = Artist.all();
  
  $scope.promise.then(
      function(listOfArtists) { 
          $scope.artists = listOfArtists;
      },
      function(errorList) {
          $log.error('Failure loading artists', errorList);
      }
  );

$scope.noSongsMessageTwo = "No songs for this artist available.";
$scope.noSongs = false;
$scope.fetchSongs= function(artistId) {
    $scope.songs = [];
    $scope.idArtist = artistId;
    $scope.getSongs = Song.all();    
    $scope.getSongs.then(
      function(listOfSongs) {
        $scope.songs = listOfSongs;
      },
      function(errorList) {
        $log.error('Couldn\'t fetch songs', errorList);
      }
    );
  }

  })
  .factory('Artist', function($http) {
    return {
      all: function() {
        return $http.get('https://itp-api.herokuapp.com/artists').then(function(response) {
          return response.data.artists;
        });
      }
    }
  })
  .factory('Song', function($http) {
    return {
      all: function() {
        return $http.get('https://itp-api.herokuapp.com/songs').then(function(response) {
          return response.data.songs;
        });
      }
    }
  });