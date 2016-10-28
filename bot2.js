console.log('The folow bot has started');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg)
{ var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('.@'+screenName+' Hey!');
}
//tweetIt();
//setInterval(tweetIt, 1000*20)


function tweetIt(txt){

  //var r= Math.floor(Math.random()*100);
  var tweet ={
    status: txt
  }
  T.post('statuses/update',tweet,tweeted)

  function tweeted(err,data , response){
  if(err)
  {
    console.log("Something went wrong!");
  }
  else{
    console.log("It worked");
  }
  //console.log(data);
  }
}
