var app = angular.module('myApp', ['ngSanitize', 'angular-loading-bar']);

var name = "Daler Asrorov";
var artist = "Limp Bizkit"; 
var lat = 30.141198;
var lon = -38.787720;

var center = new google.maps.LatLng(lat, lon); //3​0.141198, ­38.787720

//creating the map and setting it up to the given location: 3​0.141198, ­38.787720
var map = new google.maps.Map(document.getElementById('map-canvas'), {
	center: center,
	zoom: 5
});

var plotPoints = function(locObj) {
	//console.log(venueAddress);
	var myLatlng = new google.maps.LatLng(parseFloat(locObj.lat),parseFloat(locObj.lon));
	//created the new marker with animation and custom icon
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		animation: google.maps.Animation.DROP
	});
};

app.controller('NavbarCtrl', function($scope) {

  	$scope.hMain = "Midterm Project";
  	$scope.hOne = "App";
  	$scope.hTwo = "Github";
  	$scope.hThree = "Doc";
  	$scope.githubLink = "https://github.com/DalerAsrorov";
  	$scope.name = name;
});

app.controller('EventsSearchCtrl', function($scope, $sanitize, Events, Location){
	  Events.search(artist).then(function(events) {
      	$scope.events = events;
      //	console.log(events.event);
      	$scope.listOfEvents = events.event; //an object that contains arrays

      	$scope.listOfEvents.forEach(function(event) {
      		$scope.locationObj = Location.getLocation(event); //getting the location object
      		//console.log(event);
      		//plotPoints($scope.locationObj, event.venue_address);
      		plotPoints($scope.locationObj);
      		console.log(event.venue_address);
      		map.setZoom(3);
  		});
    });
});

//getEvents();
app.factory('Events', function($http) {
	return {
	    search: function(artist) {
	      //http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_number=1&date=Future&keywords=limp%20bizkit&callback=processJSONP	
	      var url = 'http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_number=1&date=Future&keywords='+ artist 
	      + '&callback=JSON_CALLBACK';

	      return $http.jsonp(url).then(function(response) {
	         	return response.data.events;
	      });
	    }
  };
});

app.factory('Location', function() {
	return {
		getLocation: function(event) {
			//console.log(event);
			var loc = {
				lat: event.latitude,
				lon: event.longitude
			};

			return loc;
		}
	};
});

