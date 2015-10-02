//Initializing the tampltes and creating new variables
//for storing the html templates.
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


//method that makes AJAX call
//and gathers the name of the artists,
//and puts them into list in html page
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


//setting counter to get 
//the index of the artist
var counter = 0;
var isNull = false;

//the method gets the artists id,
//makes AJAX call and compares the 
//received artist ids with the passed
//argument
function getSongs(num) {
		var check = false;
		songHtmlList = '';

		return $.ajax({
			url: 'http://itp-api.herokuapp.com/songs'
		}).then(function(response) {
			response.songs.forEach(function(song) {
				if (num === song.artistId) {
					if(song.genreId === null) {
						//console.log("null");
						isNull = true;
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

//empty the content inside 
//of the genre container
function emptyGenre() {
	genreHtmlList = '';
	$('#genres').html('');
};

//make AJAX call to geth the 
//genres with ids 
function getGenre(songId) {
	genreHtmlList ='';
	$.ajax({
	url: 'http://itp-api.herokuapp.com/genres',
		success: function(response) {
			response.genres.forEach(function(genre) {

				if (genre.id === songId) {
					genreHtmlList += genreTemplate(genre);
					$('#genres').html(genreHtmlList);

					if(isNull === true) {
						//$('#genres').append('<li class="list-group-item" id="null">No Genre</li>' );
					}
				}
			});	
		}
	});
};

//loading image for the songs container
displaySongLoader = function (){
	$('#songs').html('<img class="loader" src="loading.gif" />'); 
};

//loading error image for the songs container
displaySongError = function() {
	$('#songs').html('<img class="loader" src="notfound.png" />'); 
};

//calls the artists ajax function
getArtists(); 


//if the user clicks on the artist
//it will display the songs perfored by 
//the artist
$('#artists').on('click', 'a', function(e) {
	//clear the list of genres
	$('#genres').html('');

	//prevent page from reloading
	e.preventDefault();

	//display the loader
	displaySongLoader();

	//get the id and pass it to
	//the getSongs function
	var id = $(this).data('id');
	getSongs(id);
});
