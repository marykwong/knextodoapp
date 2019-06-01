// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require('mysql')

// Set up our connection information
// var connection = mysql.createConnection({
//   port: 3306,
//   host: 'localhost',
//   user: 'devUser',
//   password: '',
//   database: 'todolist'
// })

// Connect to the databaseß
// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//     return;
//   }
//   console.log('connected as id ' + connection.threadId)
// })

// Export connection
// module.exports = connection


const Knex = require('knex')(require('../knexfile'))
module.exports = Knex