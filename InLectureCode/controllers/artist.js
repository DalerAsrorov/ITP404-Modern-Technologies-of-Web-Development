angular
	.module('itunes')
	.controller('ArtistController', function(artist) {
		var vm = this;
		vm.artist = artist;
	});