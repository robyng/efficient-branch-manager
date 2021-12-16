const inquirer = require('inquirer')
const cTable = require('console.table'); //for styling mysql tables in console
const db = require('./db/connection'); // connect to db business_db
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
            // baseed on selection above, run the specificed function
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
                    endProgram() // added option to quit 
                    break;
            }
        })
};

// show all departments
function dbShowDept() {
    db.query(`SELECT * FROM department`, function (err, results) {
        if (err) {
            throw err
        };
        console.table("All Departments", results)
        questions() // restart main questions

    })

};

// show all roles
function dbShowRoles() {
    db.query(`SELECT * FROM titleName`, function (err, results) {
        if (err) {
            throw err
        };
        console.table("All Roles", results)
        questions()

    })
};

// show all employees
function dbShowEmployees() {
    db.query(`SELECT * FROM employee`, function (err, results) {
        if (err) {
            throw err
        };
        console.table("All Employees", results)
        questions()

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
        VALUES ('${answers.deptName}') `, function (err, results) {
                if (err) {
                    throw err
                };
                // Show which department was added and details on its MySQL insert 
                console.log('Sucessfully added ' + answers.deptName + '. See details below:')
                console.log(results)

                questions()

            })

        })
};

function newRole() {
    // 'name' is same as department 'name' column. Used for retrieving query as an object with name: ? and value: ?
    // Make alias for id to be 'value' to get pk id of dept name in the object
    db.query(`SELECT name, id AS value FROM department`, function (err, res) {
        if (err) {
            throw err
        };

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
                // what res is hard coded: choices: [{ name: "Admin", value: 5 }, { name: 'Fire Board', value: 1 }],
                default: 'TBD'
            }
        ])

            .then((answers) => {
                db.query(`INSERT INTO titlename SET ?`, answers,
                    function (err, results) {
                        if (err) {
                            throw err;
                        }
                        console.log('Sucessfully added new Role: ' + answers.title + '. See details below:') // Role name: title
                        console.log(results)

                        questions()

                    })
            })
    })
};

function newEmployee() {
    db.query(`SELECT title AS name, id AS value FROM titleName`, function (err, res) {
        if (err) {
            throw err;
        }
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
                    // example data of res: [{ name: 'John' + ' Kammeyer II', value: 4 }, { name: 'Bruce' + ' Barron', value: 5 }],
                    default: 'TBD'
                }

            ])

            .then((answers) => {
                db.query(`SELECT first_name AS name, id AS value FROM employee`, function (err, res) {
                    inquirer.prompt({
                        type: 'list',
                        name: 'manager_id',
                        message: 'Who is their manager?',
                        choices: res
                        // create answers2 to separate from previous answers to combine in an object
                    }).then((answers2) => {
                        let employee = {
                            first_name: answers.first_name,
                            last_name: answers.last_name,
                            titleName_id: answers.titleName_id,
                            manager_id: answers2.manager_id
                        }
                        // insert employee object into table
                        db.query('INSERT INTO employee SET ?', employee, function (err, results) {
                            if (err) {
                                throw err;
                            }
                            console.log("Successfully added new Employee: " + answers.first_name + ' ' + answers.last_name + '. See details below:')
                            console.log(results)
                            questions()
                        })

                    })
                })


            })
    })
};

function updateRole() {
    db.query(`SELECT title AS name, id as VALUE FROM titleName`, answers,
        function (err, res) {
            inquirer.prompt
            [{

                    type: 'list',
                    name: 'update_role',
                    message: "What is their role?",
                    choices: res,
                    default: 'TBD'

                }]
            //.then(answers)
        })
}

function endProgram() {
    console.log("Goodbye!")
};

questions();
