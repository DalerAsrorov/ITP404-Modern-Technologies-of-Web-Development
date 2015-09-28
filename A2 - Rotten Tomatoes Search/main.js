var script = document.createElement('script');
script.src = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=test&page_limit=40&page=1&apikey=r7dff6zkcr7mepq83k8egepf&callback=movieList.renderMovies';
document.body.appendChild(script);

var movieList ={}; //movie object to template and gather data
var SEARCH = {}; //method to search and display data

var movieTemplateString = $('#movie-template').html();
var movieTemplate = Handlebars.compile(movieTemplateString);
var movieHtmlList = "";
var movieHtml = ""; 
var movieTitleArray = [];
var numOfObj = 0;
var tempObj = {};

/* Initialize Handlebars templates and get their titles to use for search... */
movieList.renderMovies = function (response) {
	tempObj = response.movies;
	response.movies.forEach(function(movie){
		console.log(movie.title);
		movieHtmlList += movieTemplate(movie);
		movieTitleArray.push(movie.title);
	});
};

console.log(movieTitleArray); 

/* Method to take the search value entered by the user and display the results */
SEARCH.searchEntry = function (searchValue)
{
	var counter = 0;
	var check = true;
	movieTitleArray.forEach(function(movie){
  		counter += 1;
		if (searchValue.localeCompare(movie) == 0)
		{
			movieHtml = movieTemplate(tempObj[counter-1]);
		   	$('#movies').html(movieHtml);
			check=false;
			return false;
		}
	});
	if(check == true) 
	{
		movieList.loadError();
	}
}


/* Display the loading image */
movieList.displayLoader = function (){
	$('#movies').html('<img class="loader" src="loader.gif" />'); 
}

/* Display the error message if the movie entered does not exist */
movieList.loadError = function() {
	setTimeout(function(){
       		$('#movies').html('<img class="loader" src="notfound.png" /> <br/> <p class="error-notice">Sorry, did not find the movie! Try again. </p>'); 
    	}, 600);	
	movieList.displayLoader();
};


/* Function triggered after clicking on the search button */
$( "#submit" ).click(function(e) {
	e.preventDefault();
  	$('#movies').html(' '); 
    movieList.displayLoader();
  	var searchValue = $("#input").val();
  	var counter = 0;

  	SEARCH.searchEntry(searchValue);
  	
});

