##Overview

###1.

###2.Authentication
You will need to fetch the following tokens from  Twitter which can be found at https://dev.twitter.com/oauth/application-only.<br>
You will also have to enter your account credentials.<br>
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  bearer_token: ''
});


###3.HTTP verbs
GET-Used for retrieving resources.<br>
POST-Used for creating resources.


###4.HTTP Requests
client.get(path, params, callback);<br>
client.post(path, params, callback);<br>
client.stream(path, params, callback);
