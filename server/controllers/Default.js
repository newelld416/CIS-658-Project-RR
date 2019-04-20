'use strict';

var url = require('url');
var mysql = require('mysql');
var config = require('../config/config.js');

var connection = mysql.createConnection({
  host : config.host, user : config.user, password : config.password, database : config.database
});

module.exports.addUser = function addUser (req, res, next) {
  getId(1, function(id) {
    execute(`INSERT INTO users (userId, email, firstName, lastName) VALUES (${id}, '${req.body.email}','${req.body.firstName}', '${req.body.lstName}');`, res);
  });
}

module.exports.getUsers = function getUsers (req, res, next) {
  execute('SELECT * from users', res);
};

module.exports.getUsersByUserId = function getUsersByUserId (req, res, next) {
  execute(`SELECT * from users where userId = ${req.url.split('/')[2]}`, res);
};

module.exports.getRestaurants = function getRestaurants (req, res, next) {
  execute('SELECT * from restaurants', res);
};

module.exports.addRestaurant = function addRestaurant (req, res, next) {
  getId(2, function(id) {
    execute(`INSERT INTO restaurants (id,name,address,phone,description) VALUES (${id}, '${req.body.name}','${req.body.address}', '${req.body.phone}', '${req.body.description}')`,res);
  });
}

module.exports.getRestaurantsById = function getRestaurantsById (req, res, next) {
  execute(`SELECT * from restaurants where id = ${req.url.split('/')[2]}`, res);
};

module.exports.getFavoritesByUserId = function getFavoritesByUserId (req, res, next) {
  execute(`SELECT * from favorites where userId = ${req.url.split('/')[2]}`, res);
};

module.exports.addFavorite = function addFavorite (req, res, next) {
  execute(`INSERT INTO favorites (userId,restaurantId) VALUES (${req.body.userId}, '${req.body.restaurantId}')`, res);
}

function getId(type, callback) {
  const query = type == 1 ? 'SELECT MAX(userId) as id FROM users' : 'SELECT MAX(id) as id FROM restaurants';
  connection.query(query, function(err, rows, fields) {
    let response = JSON.parse(JSON.stringify(rows));
    let oldId = response[0].id;
    let newId = oldId + 1;
    callback(newId);
  });
}

function execute(query, res) {
  setTimeout(function() {
    connection.query(query, function(err, rows, fields) {
      console.log(query);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(rows));
    });
  }, 500);

}
