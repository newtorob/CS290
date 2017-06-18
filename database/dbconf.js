/**********************************************
Name: Robert Newton
CS290 HW Assignment: Database Interactions
This file is the controller for the server requests
***********************************************/

var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'localhost',
  user  : 'student',
  password: 'default',
  database: 'student'
});
module.exports.pool = pool;

