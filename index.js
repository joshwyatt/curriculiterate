var request = require('request');

var asanaAPIKey = process.env.ASANA_KEY_64;
var organization = process.env.ASANA_ORG_ID;
var assignee = process.env.ASANA_ASSIGNEE_EMAIL;

var baseURL = 'https://app.asana.com/api/1.0/users/me';
var requestOptions = {
  url: baseURL,
  headers: {
    'Authorization': 'Basic ' + asanaAPIKey
  }
};

request(requestOptions, requestCallback);

function requestCallback(err, res, body){
  if( err ){
    console.log('there was an error: ', err);
  }else{
    console.log(JSON.parse(body));
  }
}