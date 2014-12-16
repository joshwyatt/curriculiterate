;(function(){
  'use strict';
  var request = require('request');

  var asanaAPIKey = process.env.ASANA_KEY_64;
  var workspaceID = process.env.ASANA_ORG_ID;
  var assignee = process.env.ASANA_ASSIGNEE_EMAIL;

  var baseURL = 'https://app.asana.com/api/1.0/workspaces/' + workspaceID + '/tasks/';

  var requestOptions = {
    method: 'POST',
    url: baseURL,
    headers: {
      'Authorization': 'Basic ' + asanaAPIKey
    },
    json: true,
    body: {
      data: {
        name: 'TESTING FROM CURRICULITERATE 1',
        notes: 'this is a test as i develop curriculiterate, sorry if it\'s in your way!',
        assignee_status: 'inbox',
        assignee: assignee
      }
    }
  };

  //THIS REQUEST OPTIONS IS JUST FOR PLAYING AROUND WITH DURING DEVELOPMENT
  var testRequestOptions = {
    method: 'GET',
    url: 'https://app.asana.com/api/1.0/workspaces',
    headers: {
      'Authorization': 'Basic ' + asanaAPIKey
    }
  };

  request(requestOptions, requestCallback);

  function requestCallback(err, res, body){
    if( err ){
      console.log('there was an error: ', err);
    }else{
      console.log(body);
    }
  }
})();