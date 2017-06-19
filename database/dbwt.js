
var mysql = require('mysql')
var pool = mysql.createPool({
    connectionLimit : 10,
    host: 'mysql.cs.orst.edu',
    user: 'cs290_newtorob',
    password: '4180Stanky!',
    database: 'cs290_newtorob'
});

module.exports.pool = pool;