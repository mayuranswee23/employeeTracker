const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'CoderBootcamp1!',
        database: 'employeetracker'
    },
    console.log('Connected to the employeeTracker database')
);



module.exports = db;