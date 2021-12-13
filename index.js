const inquirer = require('inquirer')
const cTable = require('console.table');
const deptsArray = []; // Empty array for list of Departments
const db = require('./db/connection'); // connect to db business_db
//const dbShowDept = require('./db/tables');

// inital questions, start program
const questions = () => {  
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'Welcome to Efficient Branch Manager. Please make a selection.',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee','Update an Employee Role', 'Quit Program'],
            default: 'View All Departments'
        }
    ])
.then((answers) => {
    switch (answers.start) {
        case 'View All Departments':
            dbShowDept()
            break;
        case 'View All Roles':
            dbShowRoles()
            break;
        case 'View All Employees':
            dbShowEmployees()
            break;
            
        case "Add a Department":
            newDept();
            break;
        case 'Add a Role':
            newRole();
            break;
        case 'Add an Employee':
            console.log('we need to add an employee')
            break;
        case 'Update an Employee Role':
            console.log('we need to update an employee role')
            break;

        case 'Quit Program':
            endProgram()
            break;
    }
})
};

function newDept() {
    return inquirer.prompt([
        {
                type: 'input',
                name: 'deptName',
                message: 'What is the name of the Department?',
                default: 'TBD'
        }
    ])
    .then((answers) => {
        db.query(`INSERT INTO department (name)
        VALUES ('${answers.deptName}') `, function(err, results, fields) {
            console.log('answers is ' + answers.deptName)
            console.log(results)
            console.log(err)
            
            questions()
            
        })
        // deptsArray.push(answers)
        // console.table(deptsArray)
        //questions()
    })
};

function newRole() {
    return inquirer.prompt([
        {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the Department?',
                default: 'TBD'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?',
            default: 'TBD'
    },
    {
        type: 'list',
        name: 'selectDept',
        message: 'Under what department is this role?',
        default: 'Admin'
}
    ])
    .then((answers) => {
        db.query(`INSERT INTO titleName (${answers.roleName}, ${answers.salary}, dept_id)
        VALUES ('Fire Board Chair', 0.00, 1)`, function(err, results, fields) {
            console.log('answers is ' + answers.deptName)
                console.log(results)
                console.log(err)
            questions()
            
        })
    })
};

    function dbShowDept() {
        db.query(`SELECT * FROM department`, function(err, results, fields) {
            console.table(results);
            questions()
            
        })
        
      };

      // show all roles
      function dbShowRoles() {
        db.query(`SELECT * FROM titleName`, function(err, results, fields) {
            console.table(results);
            questions()
            
        })
      }

      function dbShowEmployees() {
        db.query(`SELECT * FROM employee`, function(err, results, fields) {
            console.table(results);
            questions()
            
        })
      }

function endProgram () {
    console.log("Goodbye!")
};

questions();
