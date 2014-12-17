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