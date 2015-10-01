// asynchronous
// console.log(1);
// $.ajax({
// 	url: 'http://itp-api.herokuapp.com/songs',
// 	type: 'get', //optional if get request
// 	success: function(response) {
// 		console.log(response);
// 		console.log(3);
// 	},
// 	error: function(jqXHR, textStatus, errorThrown) {
// 		alert('Ooops, something went wrong');
// 	}
// });

// console.log(2);

/*second way*/

// function getSongs() {
// 	var promise = $.ajax({
// 		url: 'http://itp-api.herokuapp.com/songs'
// 	});


// 	return promise.then(function(response) {
// 			console.log('r1', response);
// 			return response.songs;
// 		}, function() {
// 			console.log('error');
// 	});
// }


// getSongs().then(function(songs) {
// 	console.log(songs);
// });

/*third way*/

// var promise = $.ajax({
// 	url: 'http://itp-api.herokuapp.com/songs'
// });

// promise
// 	.then(function(response) {
// 		console.log('r1', response);
// 		return response.songs;
// 	}, function() {
// 		console.log('error');
// 	})
// 	.then(function(response) {
// 		console.log('r2', response);
// 	});

//three states: resolve, rejected, or pending
// var songs, artists;

// function bothHaveComplete() {
// 	if (songs && artists) {
// 		console.log(songs, artists);
// 	}
// }

// $.ajax({
// 	url: 'http://itp-api.herokuapp.com/songs',
// 	success: function(response) {
// 		console.log(response.songs);
// 		songs=response.songs;
// 		bothHaveComplete();
// 	}
// })

// $.ajax({
// 	url: 'http://itp-api.herokuapp.com/artists',
// 	success: function(response) {
// 		console.log(response.artists);
// 		artists = response.artists;
// 		bothHaveComplete();
// 	}
// });

// var songs = $.ajax({
// 	url: 'http://itp-api.herokuapp.com/songs'
// });

// var artists = $.ajax({
// 	url: 'http://itp-api.herokuapp.com/artists'
// });

// $.when(songs, artists).then(function(songsResponse, artistsResponse) {
// 	console.log(songsResponse, artistsResponse);
// });

/*The code below I will use */

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
	return $.ajax({
		url: 'http://itp-api.herokuapp.com/artists'
	}).then(function(response) {		
		response.artists.forEach(function(artist){
			//console.log(artist);
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
				displayLoader();
				displayError();
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
	console.log(songId);
	$.ajax({
	url: 'http://itp-api.herokuapp.com/genres',
		success: function(response) {
			//console.log(response.genres);
			response.genres.forEach(function(genre) {

				//console.log(genre.id);
				if (genre.id === songId) {
					genreHtmlList += genreTemplate(genre);
					$('#genres').html(genreHtmlList);

				}
			});	

		}
	});
}

displayLoader = function (){
	$('#songs').html('<img class="loader" src="loading.gif" />'); 
};
displayError = function() {
$('#songs').html('<img class="loader" src="notfound.png" />'); 
};


getArtists();

// event delegation
$('#artists').on('click', 'a', function(e) {
	$('#songs').html('');
	e.preventDefault();
	displayLoader();
	//console.log('click');
	var id = $(this).data('id');
	console.log(array);
	
	getSongs(id);



});


  









// $.when(getSongs(), getArtists()).then(function(songs, artists) {
// 		console.log('songs', songs);
// 		console.log('artists', artists);
// });
// console.log("runs");






