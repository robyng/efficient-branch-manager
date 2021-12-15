const inquirer = require('inquirer')
const cTable = require('console.table');
const deptsArray = []; // Empty array for list of Departments
const db = require('./db/connection'); // connect to db business_db
const { listenerCount } = require('./db/connection');
//const dbShowDept = require('./db/tables');

// inital questions, start program
const questions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'Welcome to Efficient Branch Manager. Please make a selection.',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'Quit Program'],
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
                    newEmployee();
                    break;
                case 'Update an Employee Role':
                    updateRole();
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
        VALUES ('${answers.deptName}') `, function (err, results, fields) {
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
    // name is same as dept name column for retrieving query as an object. Make alias for id to be value to get id of dept name in the object
    db.query(`SELECT name, id AS value FROM department`, function(err, res) {

    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?',
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
            name: 'dept_id',
            message: 'Under what department is this role?',
            choices: res,
            //choices: [{ name: "Admin", value: 5 }, { name: 'Fire Board', value: 1 }, { name: 'Executive Staff', value: 2 }],
            default: 'Admin'
        }
    ])

        .then((answers) => {
            db.query(`INSERT INTO titlename SET ?`, answers,
                function (err, results, fields) {
                    if (err) {
                        throw err;
                    }
                    //console.log('answers is ' + answers.deptName)
                    console.log(results)

                    questions()

                })
        })
    })
};

function dbShowDept() {
    db.query(`SELECT * FROM department`, function (err, results, fields) {
        console.table(results);
        questions()

    })

};

// show all roles
function dbShowRoles() {
    db.query(`SELECT * FROM titleName`, function (err, results, fields) {
        console.table(results);
        questions()

    })
}

function dbShowEmployees() {
    db.query(`SELECT * FROM employee`, function (err, results, fields) {
        console.table(results);
        questions()

    })
};

function newEmployee() {
    db.query(`SELECT title AS name, id AS value FROM titleName`, function(err, res) {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'first_name',
                message: "What is the employee's first name?",
                default: 'TBD'
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the employee's last name?",
                default: 'TBD'
            },
            {
                type: 'list',
                name: 'titleName_id',
                message: "What is their role?",
                choices: res, 
                // [{ name: 'John' + ' Kammeyer II', value: 4 }, { name: 'Bruce' + ' Barron', value: 5 }],
                default: 'TBD'
            },
            //.then db query??
            
            {
                type: 'input',
                name: 'manager_id',
                message: "Who is the employee's manager? List their id number",
                default: 'NULL',
            },
        ])

        .then((answers) => {
            db.query(`INSERT INTO employee SET ?`, answers,
                function (err, results, fields) {
                    if (err) {
                        throw err;
                    }

                    console.log(results)
                    questions()

                })

        })
    })
};

function updateRole() {
    inquirer .prompt
}

function endProgram() {
    console.log("Goodbye!")
};

questions();
