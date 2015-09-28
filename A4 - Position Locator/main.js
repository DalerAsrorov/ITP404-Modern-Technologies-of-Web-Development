var center = new google.maps.LatLng(34.0029139, -118.420485);

var map = new google.maps.Map(document.getElementById('map-canvas'), {
	center: center,
	zoom: 5
});

var marker = new google.maps.Marker({
	map: map,
	position: center,
	animation: google.maps.Animation.DROP
});

var infowindow = new google.maps.InfoWindow({
	content: 'Home!',
	position: center
});


google.maps.event.addListener(marker, 'click', function(event) {
	infowindow.open(map);
});

$('form').on('submit', function(e) {
	e.preventDefault();
	var search = $('#search').val();
	var geocoder = new google.maps.Geocoder();

	geocoder.geocode({
		address: search
	},
	function(results) {
		if(results.length > 0) {
			var latlng = results[0].geometry.location; //contains a LatLng object
			plotPoint(latlng, results[0].formatted_address);

		} else {
			alert('Location not found!');
		}
	});

	console.log(search);
});

function plotPoint(latlng, formatted_address) {
	// create a marker and set it on the map
	var marker = new google.maps.Marker({
		map: map,
		position: latlng,
		animation: google.maps.Animation.DROP
	});

	// create a info window (optionally)
	var infowindow = new google.maps.InfoWindow({
		content:  formatted_address,
		position: latlng
	});

	google.maps.event.addListener(marker, 'click', function(event) {
		infowindow.open(map);
	});

	// set it on the map 
	// set map center to latlng
	map.setCenter(latlng);
}



