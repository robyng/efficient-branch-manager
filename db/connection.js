const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'business'
    },
    console.log('Succesfully connected to the business database')
);


module.exports = db;