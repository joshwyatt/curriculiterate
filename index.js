#!/usr/bin/env node

'use strict';

var prompt = require('prompt');
var sendToAsana = require('./send_ticket_to_asana.js');
var ticket = {};
var ticketKeys = ['RepoName', 'HIRName', 'Email', 'ExtendedNotes']

prompt.start();

prompt.addProperties(ticket, ticketKeys, promptHandler);

function promptHandler(err, result){
  sendToAsana(ticket);
}