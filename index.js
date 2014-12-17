(function(){
  'use strict';
  var prompt = require('prompt');
  var sendToAsana = require('./send_ticket_to_asana.js');
  var ticket = {};

  prompt.start();

  prompt.addProperties(ticket, ['RepoName', 'HIRName', 'Email', 'ExtendedNotes'], promptHandler);

  function promptHandler(err, result){
    // console.log('RepoName: ' + result.RepoName);
    // console.log('HIRName: ' + result.HIRName);
    // console.log('Email: ' + result.Email);
    // console.log('ExtendedNotes: ' + result.ExtendedNotes);
    sendToAsana(ticket);
  }

})();

//NOTES
//what does this dialogue need to look like?
//1) name of the repo
//2) name of contact point
//3) email of contact point
//4) notes on what needs perhaps to change