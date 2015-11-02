var request = require('request');
var qs = require('qs');

module.exports = {
  getArtist: function(q, callback) {
    var baseUrl = 'https://api.spotify.com/v1/search';
      request({
        method: 'GET',
      //https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37"
        url: baseUrl + '?' + qs.stringify({
          q: q,
          type: 'artist'
        })
      }, function(error, response, body) {

        if(!error && response.statusCode === 200) {
          var data = JSON.parse(body);
          callback(data);
        }
      });
	},
  
  getTracks: function(q, callback) {
    var baseUrl = 'https://api.spotify.com/v1/search';
      request({
        method: 'GET',
      //https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37"
      url: baseUrl + '?' + qs.stringify({
        q: q,
        type: 'track',
        market: 'US'
      })
      }, function(error, response, body) {
    //console.log(url);
        if(!error && response.statusCode === 200) {
          var data = JSON.parse(body);
          callback(data);
        }
      });
  }
};
