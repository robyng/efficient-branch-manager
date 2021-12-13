const inquirer = require('inquirer')
const deptsArray = []; // Empty array for list of Departments
const db = require('./db/connection'); // connect to db business_db
const dbShowDept = require('./db/tables');

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
        case "Add a Department":
            newDept();
            break;
            case 'Add a Role':
                console.log('we need to add a role')
                break;
                case 'Quit Program':
                    endProgram()
                    break;
                    case 'View All Departments':
                        viewDepts()
                        break;

                

    }
})
};

function newDept() {
    return inquirer.prompt([
        {
                type: 'input',
                name: 'dept-name',
                message: 'What is the name of the Department?',
                default: 'Department Name TBD'
        }
    ])
    .then((answers) => {
        deptsArray.push(answers)
        console.log(deptsArray)
        questions()
    })
};

function viewDepts() {
    let myDepts = dbShowDept()
    console.log(myDepts)
    questions()
}

function endProgram () {
    console.log("Good bye!")
};

questions();
