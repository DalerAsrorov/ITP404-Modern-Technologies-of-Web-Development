angular
	.module('itunes')
	.controller('ArtistsController', function(artists){
		console.log(artists);
		var vm = this;
		vm.artists = artists;
	});