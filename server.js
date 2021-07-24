
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');




 function startPrompts (){
    return inquirer.prompt([
    {
        type: 'list',
        message: 'What action do you want executed?',
        name: 'options',
        choices: ['view all departments', 'view all positions', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit' ]
    },
    ])
    .then(response => {
        const action = response.options;
        if (action === 'view all departments') {
            getDepartments();
        } else if (action === 'view all positions'){
            getPositions();
        } else if (action === 'view all employees'){
            getEmployees();
        } else if (action === 'add a department'){
            addDepartment();
        }   else if (action === 'add a role'){
            addRole();
        }   else if (action === 'add an employee'){
            addEmployee();
        } else if (action === 'update an employee role'){
            updateEmployee();
        } else if (action === 'quit'){
            console.log('Goodbye')
            return;
        }
    })
};


function getDepartments(){
    const sql = `SELECT * FROM department;`;

    db.query(sql, (err, res) => {
        if (err) throw err; 
        console.table(res);
        startPrompts();
    })
};

function getPositions(){
    const sql = `SELECT role.*, department.name as Department
    FROM role
    LEFT JOIN department ON role.department_id = department.id;`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res)
        startPrompts();
    })
};

function getEmployees(){
    const sql = `SELECT * FROM employee;`;

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res)
        startPrompts();
    })
};

function addDepartment(){
    
    inquirer.prompt([
        {
            name: "departmentName",
            type: "input",
            message: "Add a department"
        }
    ]). then (response =>{
        const departmentName = response.departmentName;
        const sql = `INSERT INTO department (name) VALUE (?)`;
        db.query(sql, departmentName, (err,res) => {
            if (err) throw err;
            console.table(res)
            startPrompts();
        })
    })
};

function addRole(){

    inquirer.prompt([
        {
            name: "roleName",
            type: "input",
            message: "Enter the role title"
        },
        {
            name: "roleSalary",
            type: "input",
            message: "Enter the role salary"
        },
        {
            name: "roleDept",
            type: "list",
            message: "Enter the Dept. ID",
            choices: [1, 2, 3, 4]
        }
    ]) .then (response => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES ("${response.roleName}", "${response.roleSalary}", "${response.roleDept}")`;
        db.query(sql, (err,res) => {
            if (err) throw err;
            console.table(res)
            startPrompts();
        })
    });
}


startPrompts();





