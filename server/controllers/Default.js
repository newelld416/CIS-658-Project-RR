'use strict';

var url = require('url');
var mysql = require('mysql');
var config = require('../config/config.js');

var connection = mysql.createConnection({
  host : config.host, user : config.user, password : config.password, database : config.database
});

module.exports.getUsers = function getUsers (req, res, next) {
  execute('SELECT * from users', res);
};

module.exports.getUsersByUserId = function getUsersByUserId (req, res, next) {
  execute(`SELECT * from users where userId = ${req.url.split('/')[2]}`, res);
};

module.exports.getRestaurants = function getRestaurants (req, res, next) {
  execute('SELECT * from restaurants', res);
};

module.exports.getRestaurantsById = function getRestaurantsById (req, res, next) {
  execute(`SELECT * from restaurants where id = ${req.url.split('/')[2]}`, res);
};

module.exports.getFavoritesByUserId = function getFavoritesByUserId (req, res, next) {
  execute(`SELECT * from favorites where userId = ${req.url.split('/')[2]}`, res);
};

function execute(query, res) {
  console.log(query);
  connection.query(query, function(err, rows, fields) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rows));
  });
}
