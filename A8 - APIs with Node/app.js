var express = require('express');
var spotify = require('./app/spotify');
var app = express();

app.use(express.static(__dirname + '/public'));

// You can test the following route with
// url: http://localhost:3000/spotify/artists/[name any artist] without the square brackets
// For example, it can be: http://localhost:3000/spotify/artists/green day
app.get('/spotify/artists/:artist?', function(req, res) {
  var artist;

  if (req.params.artist) {
    artist = req.params.artist;
  } else {
    //artist = req.query.artist;
    artist = 'linkin park';
    //artist could be 
  }
  spotify.getArtist(artist, function(albums) {
    res.json(albums);
  });
});

// You can test the following route with
// url: http://localhost:3000/spotify/tracks/[name any artist] without the square brackets
// For example, it can be: http://localhost:3000/spotify/tracks/abba
app.get('/spotify/tracks/:artist?', function(req, res) {
  var artist;

  if (req.params.artist) {
    artist = req.params.artist;
  } else {
    //artist = req.query.artist;
    artist = 'abba';
  }

  spotify.getTracks(artist, function(tracks) {
    res.json(tracks);
  });
});

// listenning on the port method...
app.listen(3000, function() {
	console.log('Listening on port 3000');
});
