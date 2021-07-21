const mysql = require('mysql12');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'election'
    },
    console.log('Connected to the employeeTracker database')
);

module.exports = db;