var request = require('request');

var asanaAPIKey = process.env.ASANA_API_KEY;
var organization = process.env.ASANA_ORG_ID;
var assignee = process.env.ASANA_ASSIGNEE_EMAIL;

var baseURL = 'https://app.asana.com/api/1.0/users/me';
var requestOptions = {
  url: baseURL,
  headers: {
    'Authorization': 'Basic NHRnMkc4b2MublhWYXdJOWtxSHY3NTVBT245cXZHWGo6'
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