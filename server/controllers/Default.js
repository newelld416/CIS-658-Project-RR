'use strict';

var url = require('url');
var mysql = require('mysql');
var config = require('../config/config.js');

var connection = mysql.createConnection({
  host : config.host, user : config.user, password : config.password, database : config.database
});

module.exports.getUsers = function getUsers (req, res, next) {
  connection.query('SELECT * from users', function(err, rows, fields) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rows));
  });
};

module.exports.getUsersByUserId = function getUsersByUserId (req, res, next) {
  const userId = req.url.split('/')[2];
  connection.query(`SELECT * from users where userId = ${userId}`, function(err, rows, fields) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rows));
  });
};
