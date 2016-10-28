console.log('The bot has started');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

T.get('search/tweets', { q: 'happy', count: 2 }, function(err, data, response) {
  var tweets =data.statuses;
  for(var i=0; i<tweets.length;i++)
  {
    console.log(tweets[i].text);
  }
  //console.log(data)
})
