angular
  .module('app')
  .controller('UserCtrl', function($scope) {	
      $scope.user = "user";
      console.log($scope.user);
  });
