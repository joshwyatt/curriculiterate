'use strict';
module.exports = function(ticket){
  var request = require('request');

  var asanaAPIKey = process.env.ASANA_KEY_64;
  var workspaceID = process.env.ASANA_ORG_ID;
  var assignee = process.env.ASANA_ASSIGNEE_EMAIL;
  var repoName = ticket.RepoName;
  var HIRName = ticket.HIRName;
  var HIRemail = ticket.Email;
  var extendedNotes = ticket.ExtendedNotes;

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
        name: 'Iterate on ' + repoName + ' from ' + HIRName + ' - ' + HIRemail,
        notes: extendedNotes,
        assignee_status: 'inbox',
        assignee: assignee
      }
    }
  };

  function requestCallback(err, res, body){
    if( err ){
      console.log('there was an error: ', err);
    }else{
      console.log('Your ticket was successfully sent. Thanks!');
    }
  }

  request(requestOptions, requestCallback);
};