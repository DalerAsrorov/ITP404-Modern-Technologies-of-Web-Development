angular
  .module('app')
  .controller('MainCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.hi = "hi";
    console.log("hi");

 }]);
