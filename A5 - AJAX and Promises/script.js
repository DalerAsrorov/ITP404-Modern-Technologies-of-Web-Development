var artistTemplateString = $('#artists-template').html();
var artistTemplate = Handlebars.compile(artistTemplateString);
var songsTemplateString = $('#songs-template').html();
var songsTemplate = Handlebars.compile(songsTemplateString);
var genreTemplateString = $('#genre-template').html();
var genreTemplate = Handlebars.compile(genreTemplateString);
var artistHtmlList = "";
var songHtmlList = "";
var genreHtmlList = "";
var array = [];

function getArtists() {
	$('#artists').html('<img class="artists-loader" src="loading-artists.gif" />'); 
	return $.ajax({
		url: 'http://itp-api.herokuapp.com/artists'
	}).then(function(response) {		
		
		response.artists.forEach(function(artist){

			artistHtmlList += artistTemplate(artist);
			$('#artists').html(artistHtmlList);
		});

	});
};

var counter = 0;
var setG = true;

function getSongs(num) {
		var check = false;
		songHtmlList = '';

		return $.ajax({
			url: 'http://itp-api.herokuapp.com/songs'
		}).then(function(response) {
			response.songs.forEach(function(song) {
				if (num === song.artistId) {
					if(song.genreId === null) {
						setG = false;
					}

					getGenre(song.genreId);
					songHtmlList += songsTemplate(song);
					$('#songs').html(songHtmlList);
					
					check = true;
				};
			});
			if (check === false) {
				displaySongLoader();
				displaySongError();
				emptyGenre();
			};

		});
};

function emptyGenre() {
	genreHtmlList = '';
	$('#genres').html('');
};

function getGenre(songId) {
	genreHtmlList ='';
	$.ajax({
	url: 'http://itp-api.herokuapp.com/genres',
		success: function(response) {
			response.genres.forEach(function(genre) {
				if (genre.id === songId) {
					genreHtmlList += genreTemplate(genre);
					$('#genres').html(genreHtmlList);

				}
			});	
		}
	});
};

displaySongLoader = function (){
	$('#songs').html('<img class="loader" src="loading.gif" />'); 
};
displaySongError = function() {
	$('#songs').html('<img class="loader" src="notfound.png" />'); 
};

getArtists(); //calls the artists ajax function

$('#artists').on('click', 'a', function(e) {
	$('#songs').html('');
	e.preventDefault();
	displaySongLoader();
	//console.log('click');
	var id = $(this).data('id');
	console.log(array);
	
	getSongs(id);
});