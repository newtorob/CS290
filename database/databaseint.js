/**********************************************
Name: Robert Newton
CS290 HW Assignment: Database Interactions
This file is the controller for the server requests
***********************************************/

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host: 'mysql.cs.orst.edu',
  user: 'cs290_newtorob',
  password: '4180Stanky!',
  database: 'student',
  dateStrings:'true'
});
module.exports.pool = pool;

