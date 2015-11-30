var getPosition = navigator.geolocation.getCurrentPosition(function(position) {

	//getting the current location of the user
	var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	//creating the map and setting it up to the current location (before the reverse geocoding)
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: center,
		zoom: 5
	});

	//creating the new information window and setting it up
	var infowindow = new google.maps.InfoWindow({
		content: '',
		position: center
	});

	//create a new instance of the Goecoder class 
	var geocoder = new google.maps.Geocoder(); 

	//calling the method that reverse geocodes the current location
	reverseGeocode(geocoder, map, infowindow, position); 

}, function(position) {
	window.alert("The map couldn't be loaded");
});

function reverseGeocode(geocoder, map, infowindow, position) {

	//giving the received values to the object 
	var latlng = {lat: position.coords.latitude, lng: position.coords.longitude};

	//reverse geocoding the current location
	geocoder.geocode({'location': latlng}, function(results, status) {

	//if the location is found, show the results	
    if (status === google.maps.GeocoderStatus.OK) {
       if(results[0]) {

       	//geting the result's latitude and longtitude
       	//and giving these values to the new object
       	var newLat = results[0].geometry.location.lat();
       	var newLng = results[0].geometry.location.lng();
    		var newLatLng = {lat: newLat, lng: lnewLng};	

    		//method to zoom in the map
       		map.setZoom(16);  
       		
       		//location of the icon
       		var iconBase = 'android.png';

       		//created the new marker with animation and custom icon
       		var marker = new google.maps.Marker({
       			position: newLatLng,
       			map: map,
       			icon: iconBase, //icon is set
       			animation: google.maps.Animation.DROP
       		});
       		
       		//if the user clicks on the marker, show him the address
       		google.maps.event.addListener(marker, 'click', function(event) {
       			infowindow.setContent(results[0].formatted_address);
       			infowindow.open(map, marker);
			});
       }
       else {
       		window.alert('No results found');
       }
    } 
    else {
    	window.alert('Geocoder failed due to ' + status);
    }
  });
};