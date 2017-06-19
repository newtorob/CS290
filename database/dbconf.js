/**********************************************
Name: Robert Newton
CS290 HW Assignment: Database Interactions
This file is the controller for the server requests
***********************************************/

var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'mysql.cs.orst.edu',
  user  : 'cs290_newtorob',
  password: '4180Stanky!',
  database: 'cs290_newtorob',
  dateStrings:'true'
});
module.exports.pool = pool;

