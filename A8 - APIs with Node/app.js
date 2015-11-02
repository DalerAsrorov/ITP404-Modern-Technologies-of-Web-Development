var express = require('express');
var spotify = require('./app/spotify');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/spotify/artists/:artist?', function(req, res) {
  var artist;

  //example url: http://localhost:3000/spotify/artists/green day

  if (req.params.artist) {
    artist = req.params.artist;
  } else {
    //artist = req.query.artist;
    artist = 'linkin park';
  }
  spotify.getArtist(artist, function(albums) {
    res.json(albums);
  });
});

app.get('/spotify/tracks/:artist?', function(req, res) {
  var artist;

  //example url: http://localhost:3000/spotify/tracks/green day

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

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
